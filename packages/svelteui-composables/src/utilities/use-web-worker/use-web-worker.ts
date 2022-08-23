import type { ConfigurableWindow } from '$clib/shared/index.js';
import { defaultWindow } from '$clib/shared/index.js';
import createWorkerBlobUrl from './lib/createWorkerBlobUrl.js';

export type WebWorkerStatus = 'PENDING' | 'SUCCESS' | 'RUNNING' | 'ERROR' | 'TIMEOUT_EXPIRED';

export interface WebWorkerOptions extends ConfigurableWindow {
	timeout?: number;
	dependencies?: string[];
}

export interface UseWebWorkerReturn {
	workerFn: (...fnArgs: any[]) => Promise<any>;
	workerStatus: WebWorkerStatus;
	workerTerminate: (status?: WebWorkerStatus) => void;
}

/**
 * Run expensive function without blocking the UI, using a simple syntax that makes use of Promise.
 *
 * @see https://svelteui.org/composables/use-web-worker
 * @param fn
 * @param options
 */
export const useWebWorker = <T extends (...fnArgs: any[]) => any>(
	fn: T,
	options: WebWorkerOptions = {}
): UseWebWorkerReturn => {
	const { dependencies = [], timeout, window = defaultWindow } = options;

	let timeoutId: number, worker: (Worker & { _url?: string }) | undefined;
	let workerStatus: WebWorkerStatus = 'PENDING';
	let promise: {
		reject?: (result: ReturnType<T> | ErrorEvent) => void;
		resolve?: (result: ReturnType<T>) => void;
	} = {};

	const workerTerminate = (status: WebWorkerStatus = 'PENDING') => {
		if (worker && worker._url && window) {
			worker.terminate();
			URL.revokeObjectURL(worker._url);
			promise = {};
			worker = undefined;
			window.clearTimeout(timeoutId);
			workerStatus = status;
		}
	};

	workerTerminate();

	const generateWorker = () => {
		const blobUrl = createWorkerBlobUrl(fn, dependencies);
		const newWorker: Worker & { _url?: string } = new Worker(blobUrl);
		newWorker._url = blobUrl;

		newWorker.onmessage = (e: MessageEvent) => {
			const { resolve = () => {}, reject = () => {} } = promise;
			const [status, result] = e.data as [WebWorkerStatus, ReturnType<T>];

			switch (status) {
				case 'SUCCESS':
					resolve(result);
					workerTerminate(status);
					break;
				default:
					reject(result);
					workerTerminate('ERROR');
					break;
			}
		};

		newWorker.onerror = (e: ErrorEvent) => {
			const { reject = () => {} } = promise;

			reject(e);
			workerTerminate('ERROR');
		};

		if (timeout) {
			timeoutId = setTimeout(() => workerTerminate('TIMEOUT_EXPIRED'), timeout) as any;
		}
		return newWorker;
	};

	const callWorker = (...fnArgs: Parameters<T>) =>
		new Promise<ReturnType<T>>((resolve, reject) => {
			promise = {
				resolve,
				reject
			};
			worker && worker.postMessage([[...fnArgs]]);

			workerStatus = 'RUNNING';
		});

	const workerFn = (...fnArgs: Parameters<T>) => {
		if (workerStatus === 'RUNNING') {
			/* eslint-disable-next-line no-console */
			console.error('[useWebWorker] You can only run one instance of the worker at a time.');
			/* eslint-disable-next-line prefer-promise-reject-errors */
			return Promise.reject();
		}

		worker = generateWorker();
		return callWorker(...fnArgs);
	};

	return {
		workerFn,
		workerStatus,
		workerTerminate
	};
};

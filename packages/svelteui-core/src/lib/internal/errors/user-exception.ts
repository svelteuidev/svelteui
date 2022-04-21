import { browser } from './modules/browser';
import { minifiedCss } from './assets/error-styles';
import type { CurrentComponents } from './types';

const style: HTMLStyleElement = browser ? document.createElement('style') : undefined;

if (browser) {
	const s = style;
	s.textContent = minifiedCss;
	s.id = 'svelteui-inject';
}

/**
 * The UserException function is used to help consumers of the library better navigate through potential errors.
 *
 *
 * It **does not** throw any errors because crashing the user's application is undesirable
 *
 * @param component the component the error is bound to
 * @param message the error message for the consumer
 * @param solution the potential solution for the consumer
 */
export function UserException(component: CurrentComponents, message: string, solution?: string) {
	if (browser) document.head.appendChild(style);
	const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ''}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
	return html;
}

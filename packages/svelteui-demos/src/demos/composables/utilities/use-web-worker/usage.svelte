<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button, Stack, Text } from '@svelteuidev/core';
	import { useWebWorker, useRafFn } from '@svelteuidev/composables';
	import { tick } from 'svelte';

	let data;
	let runner = '';
	let count = 0;

	const controls = useRafFn(() => count++);
	const { workerFn, workerStatus, workerTerminate } = useWebWorker(heavyTask);

	const baseSort = async () => {
		data = null;
		await tick();
		data = heavyTask();
		runner = 'Main';
	};
	const workerSort = async () => {
		data = null;
		await tick();
		data = await workerFn();
		runner = 'Worker';
	};
	$: running = workerStatus === 'RUNNING';
	controls.resume();
<\/script>

<Stack align="center">
	<Text>Current Count: <b>{count}</b></Text>
	<Stack>
		<Button on:click={baseSort}>Sort in Main Thread</Button>
		{#if !running}
			<Button on:click={workerSort}>Sort in Worker</Button>
		{:else}
			<Button color="orange" on:click={() => workerTerminate()}>Terminate Worker</Button>
		{/if}
	</Stack>
</Stack>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		canShowCode: true
	};

	const heavyTask = () => {
		const randomNumber = () => Math.trunc(Math.random() * 5_000_00);
		const numbers: number[] = Array(5_000_000).fill(undefined).map(randomNumber);
		numbers.sort();
		return numbers.slice(0, 5);
	};
</script>

<script lang="ts">
	import { Button, Stack, Text } from '@svelteuidev/core';
	import { useWebWorker, useRafFn } from '@svelteuidev/composables';
	import { tick } from 'svelte';

	let data = $state();
	let runner = $state('');
	let count = $state(0);

	const controls = useRafFn(() => count++);
	const { workerFn, workerStatus, workerTerminate } = useWebWorker(heavyTask);

	const baseSort = async () => {
		data = null;
		await tick();
		data = heavyTask();
		runner = 'Main';
	};
	const workerSort = async () => {
		data = null;
		await tick();
		data = await workerFn();
		runner = 'Worker';
	};
	let running = $derived(workerStatus === 'RUNNING');
	controls.resume();
</script>

<Stack align="center">
	<Text root="note" size="sm" weight="bold">
		This is a demo showing sort for large array (5 milion numbers) with or w/o WebWorker.<br />
	</Text>
	<Text>Current Count: <b>{count}</b></Text>
	<Stack>
		<Button on:click={baseSort}>Sort in Main Thread</Button>
		{#if !running}
			<Button on:click={workerSort}>Sort in Worker</Button>
		{:else}
			<Button color="orange" on:click={() => workerTerminate()}>Terminate Worker</Button>
		{/if}
	</Stack>
	{#if data}
		<Text>
			Thread: <strong>{runner}</strong><br />
			Result: <strong>{data}</strong>
		</Text>
	{/if}
</Stack>

<script lang="ts">
	import { prism } from 'svelte-prism-action';
	import { Code } from '@svelteuidev/core/package';
	import { themes } from './prism-themes';
	import type { PrismTheme } from './types';

	const code: string = `
		const obj = {
			prop1: 'Hello',
			prop2: 'World'
		}
	`;
	export let inline: boolean = true;
	export let block: boolean = false;
	export let language: string = 'javascript';
	export let message: string = code;
	export let theme: PrismTheme = 'default';

	$: block ? (inline = false) : (inline = true);
</script>

<svelte:head>
	<link href={themes[theme]} rel="stylesheet" />
</svelte:head>

<div use:prism>
	{#if inline}
		<Code class="lang-{language}">
			<slot>{code}</slot>
		</Code>
	{:else if block}
		<Code class="lang-{language}" width={95} block copy {message}>
			<slot>
				{code}
			</slot>
		</Code>
	{/if}
</div>

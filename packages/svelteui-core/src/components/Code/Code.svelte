<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { clipboard, useActions, createEventForwarder } from '$lib/internal';
	import Error from '$lib/internal/errors/Error.svelte';
	import useStyles from './Code.styles';
	import CopyIcon from './CopyIcon.svelte';
	import { CodeErrors } from './Code.errors';
	import type { CodeProps as $$CodeProps } from './Code';

	interface $$Props extends $$CodeProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'gray',
		block: $$Props['block'] = false,
		width: $$Props['width'] = 100,
		copy: $$Props['copy'] = false,
		message: $$Props['message'] = 'Copied',
		noMono: $$Props['noMono'] = false;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Copy logic */
	let copied = false;
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (!block && width < 100) {
		observable = true;
		err = CodeErrors[0];
	}

	if (copy && message === 'Copied') {
		observable = true;
		err = CodeErrors[1];
	}

	if (copy && !block) {
		observable = true;
		err = CodeErrors[2];
	}

	$: if (observable) override = { display: 'none' };
	// --------------Error Handling-------------------

	$: ({ cx, classes, getStyles } = useStyles({ color, block, noMono, width }, { name: 'Code' }));
</script>

<Error {observable} component="Code" code={err} />

<!--
@component
Inline or block code without syntax highlighting

@see https://svelteui.org/core/code
@example
    ```tsx
    <Code color='green' size='lg' variant='bars' /> // standard code component
    <Code color='blue' block copy message={codeToCopy} /> // code with block and copy props
    ```
-->

{#if block}
	<pre
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class={cx(className, classes.root, getStyles({ css: override }))}
		{...$$restProps}>
		{#if !noMono}
			<code class={className}><slot>Write some code</slot></code>
		{:else}
			<p class={className}><slot>Write some code</slot></p>
		{/if}
      {#if copy}
			<button on:click={toggle} use:clipboard={message} class={classes.copy}
				><CopyIcon {copied} /></button
			>
		{/if}
    </pre>
{:else}
	<code
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class={cx(className, classes.root, getStyles({ css: override }))}
		{...$$restProps}
	>
		<slot>Write some code</slot>
	</code>
{/if}

<style>
	button {
		border: 0;
		padding: 0;
		background: none;
		cursor: pointer;
	}
</style>

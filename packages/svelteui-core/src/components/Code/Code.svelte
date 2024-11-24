<script lang="ts">
	import { run } from 'svelte/legacy';

	import { get_current_component } from 'svelte/internal';
	import { clipboard, useActions, createEventForwarder } from '$lib/internal';
	import Error from '$lib/internal/errors/Error.svelte';
	import useStyles from './Code.styles';
	import CopyIcon from './CopyIcon.svelte';
	import { CodeErrors } from './Code.errors';
	import type { CodeProps as $$CodeProps } from './Code';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		color?: $$Props['color'];
		block?: $$Props['block'];
		width?: $$Props['width'];
		copy?: $$Props['copy'];
		message?: $$Props['message'];
		noMono?: $$Props['noMono'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = $bindable({}),
		color = 'gray',
		block = false,
		width = 100,
		copy = false,
		message = 'Copied',
		noMono = false,
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Copy logic */
	let copied = $state(false);
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	// --------------Error Handling-------------------
	let observable: boolean = $state(false);
	let err = $state();

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

	run(() => {
		if (observable) override = { display: 'none' };
	});
	// --------------Error Handling-------------------

	let { cx, classes, getStyles } = $derived(useStyles({ color, block, noMono, width }, { name: 'Code' }));
</script>

<Error {observable} component="Code" code={err} />

<!--
@component
Inline or block code without syntax highlighting

@see https://svelteui.dev/core/code
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
		{...rest}>
		{#if !noMono}
			<code class={className}>{#if children}{@render children()}{:else}Write some code{/if}</code>
		{:else}
			<p class={className}>{#if children}{@render children()}{:else}Write some code{/if}</p>
		{/if}
      {#if copy}
			<button onclick={toggle} use:clipboard={message} class={classes.copy}
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
		{...rest}
	>
		{#if children}{@render children()}{:else}Write some code{/if}
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

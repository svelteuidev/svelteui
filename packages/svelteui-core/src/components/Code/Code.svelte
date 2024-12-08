<script lang="ts">
	import { clipboard, useActions } from '$lib/internal';
	import useStyles from './Code.styles';
	import CopyIcon from './CopyIcon.svelte';
	import type { CodeProps } from './Code';

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
	}: CodeProps = $props();

	/** Copy logic */
	let copied = $state(false);
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, block, noMono, width }, { name: 'Code' })
	);
</script>

{#if block}
	<pre
		bind:this={element}
		use:useActions={use}
		class={cx(className, classes.root, getStyles({ css: override }))}
		{...rest}>
		{#if !noMono}
			<code class={className}
				>{#if children}{@render children()}{:else}Write some code{/if}</code
			>
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

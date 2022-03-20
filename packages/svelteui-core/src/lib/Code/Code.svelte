<script lang="ts">
	import CopyIcon from './CopyIcon.svelte';
	import { css } from '$lib/_styles/index';
	import { clipboard } from '$lib/_internal';
	import type { SvelteuiColor, Override } from '$lib/_styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** Code color and background from the default theme */
	export let color: SvelteuiColor = 'gray';
	/** True for code block, false for inline code */
	export let block: boolean = false;
	/** The width of the code block when set to block */
	export let width: number = 100;
	/** With copy prop will allow for string in the associated method prop to be copied*/
	export let copy = false;
	/** Message prop will be the text that is copied when the copy prop is enabled */
	export let message: string = 'Copied';

	/** Copy logic */
	let copied = false;
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	// Error handling for width prop
	if (!block && width < 100) {
		throw new Error('Code Component: Width can only be modified when block prop is true');
	}

	// Error handling for copy prop
	if (copy && message === 'Copied') {
		throw new Error(
			'Code Component: If using the copy prop, a message must be assosciated with it'
		);
	}

	/** Css function to generate button styles */
	const CodeStyles = css({
		position: 'relative',
		lineHeight: 1.55,
		padding: `2px 10px`,
		borderRadius: '$sm',
		color: color === 'dark' ? `$dark400` : `$dark700`,
		backgroundColor: `$${color}50`,
		fontFamily: '$mono',
		fontSize: '$xs',
		width: block ? `${width}%` : null,
		[`& ${block}`]: {
			padding: '$xs',
			margin: 0,
			overflowX: 'auto'
		}
	});
</script>

<!--
@component
The Code component creates ...

@see https://svelteui-docs.vercel.app/docs/core/code
@example
    ```tsx
    <Code color='green' size='lg' variant='bars' /> // standard code component
    <Code color='blue' block copy message={codeToCopy} /> // code with block and copy props
    ```
-->
{#if block}
	<pre class={CodeStyles({ css: override })} {...$$restProps}>
      <code class={className}><slot>Write some code</slot></code>
      {#if copy}
			<button on:click={toggle} use:clipboard={message} class:copy><CopyIcon {copied} /></button>
		{/if}
    </pre>
{:else}
	<code class="{className} {CodeStyles({ css: override })}" {...$$restProps}>
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
	.copy {
		position: absolute;
		top: 10%;
		right: 2%;
		z-index: 2;
	}
</style>

<script lang="ts">
	import CopyIcon from './CopyIcon.svelte';
	import { clipboard } from '@svelteuidev/actions/src/lib';
	import { css } from '@svelteuidev/core/package';

	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** Code color and background from the default theme */
	export let language: string = 'js';
	/** True for code block, false for inline code */
	export let inline: boolean = false;
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
	if (inline && width < 100) {
		throw new Error('Code Component: Width can only be modified when block prop is true');
	}

	// Error handling for copy prop
	if (copy && message === 'Copied') {
		throw new Error(
			'Code Component: If using the copy prop, a message must be assosciated with it'
		);
	}

	/** Css function to generate button styles */
	const PrismStyles = css({
		position: 'relative',
		boxSizing: 'border-box',
		fontFamily: '$mono',
		lineHeight: 1.7,
		fontSize: 13,
		overflowX: 'auto',
		borderRadius: '$sm',
		padding: `$sm 0`,
		marginTop: 0,
		marginBottom: 0,

		[`& ${copy}`]: {
			position: 'absolute',
			top: '$xs',
			right: '$xs',
			left: '$xs',
			zIndex: 2
		}

		/*
	[`& ${line}`]: {
		display: 'flex',
		width: '100%',
		padding: `0 $md`
	},

	[`& ${lineNumber}`]: {
		color: '$gray400',
		textAlign: 'right',
		paddingRight: '$xl',
		paddingLeft: '$xl',
		userSelect: 'none'
	},

	[`& ${lineContent}`]: {
		width: '100%'
	}
    */
	});
</script>

<!--
@component
The Code component creates ...

@see https://svelteui-docs.vercel.app/docs/core/code
@example
    ```tsx
    <Prism /> // standard Prism component
    <Prism /> // Prism with block and copy props
    ```
-->
{#if inline}
	<code class="language-{language}" {...$$restProps}>
		<slot>Write some code</slot>
	</code>
{:else}
	<pre class={PrismStyles({ css: override })} {...$$restProps}>
  <code class="language-{language}"><slot>Write some code</slot></code>
  {#if copy}
			<button on:click={toggle} use:clipboard={message} class:copy><CopyIcon {copied} /></button>
		{/if}
</pre>
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

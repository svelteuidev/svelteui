<script lang="ts">
	import CopyIcon from './CopyIcon.svelte';
	import { css } from '$lib/_styles/index';
	import { clipboard, UserException } from '$lib/_internal';
	import type { SvelteuiColor, Override } from '$lib/_styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
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
	/** Changes the font of the text to match the standard font */
	export let noMono: boolean = false;

	/** Copy logic */
	let copied = false;
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	/** Css function to generate button styles */
	const CodeStyles = css({
		position: 'relative',
		lineHeight: noMono ? 0 : 1.55,
		padding: `2px 10px`,
		borderRadius: '$sm',
		color: color === 'dark' ? `$dark400` : `$dark700`,
		backgroundColor: `$${color}50`,
		fontFamily: noMono ? '$standard' : '$mono',
		fontSize: '$sm',
		width: block ? `${width}%` : null,
		'& .copy': {
			position: 'sticky',
			bottom: '60%',
			left: '99%',
			zIndex: '2',
			backgroundColor: 'White'
		},
		'&.block': {
			margin: 0,
			padding: '10px',
			overflowX: 'auto'
		}
	});

	// --------------Error Handling-------------------
	let error: boolean = false;
	let errorMessage: string = '';
	let solution: string = '';

	if (!block && width < 100) {
		error = true;
		errorMessage = 'Width can only be modified when block prop is true';
		solution = `
		If your component looks like this:

		<\\Code width={50} ...> Code Text <\\/Code>
		       ^^^^^^^^^^ - Try adding the block prop 
		`;
	}

	if (copy && message === 'Copied') {
		error = true;
		errorMessage = 'If using the copy prop, a message must be assosciated with it';
		solution = `
		<strong>If your component looks like this:</strong>

		<\\Code copy block ...> Code Text <\\/Code>
		       ^^^^^^^^^^ - Try adding the message prop
		`;
	}

	if (copy && !block) {
		error = true;
		errorMessage = 'If using the copy prop, the block prop must be set as well';
		solution = `
		<strong>If your component looks like this:</strong>

		<\\Code copy ...> Code Text <\\/Code>
		       ^^^^ - Try adding the block prop
		`;
	}

	$: if (error) override = { display: 'none' };
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
{#if error}
	{@html UserException('Code', errorMessage, solution)}
{/if}

{#if block}
	<pre class:block class={CodeStyles({ css: override })} {...$$restProps}>
		{#if !noMono}
			<code class={className}><slot>Write some code</slot></code>
		{:else}
			<p class={className}><slot>Write some code</slot></p>
		{/if}
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
</style>

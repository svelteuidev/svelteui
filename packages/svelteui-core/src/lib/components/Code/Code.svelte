<script lang="ts">
	import CopyIcon from './CopyIcon.svelte';
	import { css, dark, rgba } from '$lib/styles';
	import { clipboard } from '$lib/internal';
	import { CodeErrors } from './Code.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { CodeProps } from './Code.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: CodeProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: CodeProps['override'] = {};
	/** Code color and background from the default theme */
	export let color: CodeProps['color'] = 'gray';
	/** True for code block, false for inline code */
	export let block: CodeProps['block'] = false;
	/** The width of the code block when set to block */
	export let width: CodeProps['width'] = 100;
	/** With copy prop will allow for string in the associated method prop to be copied*/
	export let copy: CodeProps['copy'] = false;
	/** Message prop will be the text that is copied when the copy prop is enabled */
	export let message: CodeProps['message'] = 'Copied';
	/** Changes the font of the text to match the standard font */
	export let noMono: CodeProps['noMono'] = false;

	/** Copy logic */
	let copied = false;
	function toggle() {
		// sets the copied state for icon
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	/** Css function to generate button styles */
	const darkColor = dark.colors[`${color}800`].value;

	$: CodeStyles = css({
		focusRing: 'auto',
		[`${dark.selector} &`]: {
			backgroundColor: color === 'dark' ? `$${color}400` : rgba(darkColor, 0.35),
			color: color === 'dark' ? '$dark50' : 'White'
		},
		position: 'relative',
		lineHeight: noMono ? 0 : 1.55,
		padding: `2px 10px`,
		borderRadius: '$sm',
		color: '$dark700',
		backgroundColor: `$${color}50`,
		fontFamily: noMono ? '$standard' : '$mono',
		fontSize: '$sm',
		width: block ? `${width}%` : 'auto',
		'& .copy': {
			[`${dark.selector} &`]: {
				backgroundColor: 'rgba(52, 58, 64, 0.35);',
				color: 'White'
			},
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
</script>

<Error {observable} component="Code" code={err} />

<!--
@component
Inline or block code without syntax highlighting
	
@see https://svelteui-docs.vercel.app/docs/core/code
@example
    ```tsx
    <Code color='green' size='lg' variant='bars' /> // standard code component
    <Code color='blue' block copy message={codeToCopy} /> // code with block and copy props
    ```
-->

{#if block}
	<pre
		class:block
		class={CodeStyles({ css: override })}
		{...$$restProps}>
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

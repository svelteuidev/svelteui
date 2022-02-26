<script lang="ts">
	import CopyIcon from './CopyIcon.svelte';
	import { css } from '@stitches/core';
	import { theme } from '$lib/_internal';
	import { getSharedColorScheme } from '$lib/_styles';
	import { clipboard } from '$lib/_internal';
	import type { SvelteuiColor, Override } from '$lib/_styles';
	import type { GetVariantStyles } from './Code.styles';

	/** Code Component Props */
	export let override: Override['props'] = {};
	export let color: SvelteuiColor = $theme.colorScheme === 'dark' ? 'dark' : 'gray';
	export let block: boolean = false;
	export let width: number = 100;
	export let copy = false;
	export let message: string = 'Copied';
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

	/** Varient theme functions */
	/** Need the objects to pass theme store as function parameters */
	const sharedColorSchemeValues: GetVariantStyles = { color, theme: $theme, variant: 'light' };
	const variantStyles = getSharedColorScheme(sharedColorSchemeValues);

	/** Code theme only gets applied on mount */
	const CodeStyles = css({
		position: 'relative',
		lineHeight: $theme.lineHeight,
		padding: `2px ${$theme.spacing.xs / 2}px`,
		borderRadius: $theme.radius.sm,
		color:
			$theme.colorScheme === 'dark'
				? color === 'dark'
					? $theme.colors.dark[0]
					: $theme.white
				: $theme.colors.dark[7],
		backgroundColor:
			$theme.colorScheme === 'dark' && color === 'dark'
				? $theme.colors.dark[4]
				: variantStyles.background,
		fontFamily: $theme.fontFamilyMonospace,
		fontSize: $theme.fontSizes.xs,
		width: block ? `${width}%` : null,
		[`& ${block}`]: {
			padding: $theme.spacing.xs,
			margin: 0,
			overflowX: 'auto'
		}
	});
</script>

<!--
@component
The Code component creates ...

@see https://svelteui-docs.vercel.app/core/code
@example
    ```tsx
    <Code color='green' size='lg' variant='bars' /> // standard code component
    <Code color='blue' block copy message={codeToCopy} /> // code with block and copy props
    ```
-->
{#if block}
	<pre class={CodeStyles({ css: override })} {...$$restProps}>
      <code><slot>Write some code</slot></code>
      {#if copy}
			<button on:click={toggle} use:clipboard={message} class:copy><CopyIcon {copied} /></button>
		{/if}
    </pre>
{:else}
	<code class={CodeStyles({ css: override })} {...$$restProps}>
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

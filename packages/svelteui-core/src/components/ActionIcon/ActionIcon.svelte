<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Loader from '../Loader/Loader.svelte';
	import type { ActionIconProps as $$ActionIconProps } from './ActionIcon';
	import {
		buildClass,
		darken,
		getColor,
		mapSizeVariable,
		rgba,
		variantVariables
	} from '$lib/styles';
	import { getTheme } from '$lib/styles/theme';

	interface $$Props extends $$ActionIconProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		style: $$Props['style'] = '',
		root: $$Props['root'] = 'button',
		color: $$Props['color'] = 'gray',
		variant: $$Props['variant'] = 'hover',
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		loaderProps: $$Props['loaderProps'] = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading: $$Props['loading'] = false,
		disabled: $$Props['disabled'] = false,
		href: $$Props['href'] = '',
		external: $$Props['external'] = false;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	let isHTMLElement;
	let isComponent;
	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	function actionIconVariantVariables(variant, color) {
		const variables = variantVariables(variant, color);

		if (variables.length > 0) return variables;

		// @TODO(migration): this is not ideal - find a way of extending variantVariables object
		const theme = getTheme();
		color = color ?? theme.primary;
		const colorInfo = getColor(color);
		switch (variant) {
			case 'hover':
				if (!colorInfo.fromTheme) {
					return [
						`--variant-background: transparent`,
						`--variant-color: ${color}`,
						`--variant-border: 1px solid transparent`, // @TODO(migration): change '1px' to rem in the future
						`--variant-hover: ${darken(color, 0.1)}` // @TODO(migration): check if correct
					];
				}

				if (colorInfo.shade !== undefined) {
					return [
						`--variant-background: transparent`,
						`--variant-color: var(--${colorInfo.color}${colorInfo.shade})`,
						`--variant-border: 1px solid transparent`,
						`--variant-hover: var(--${colorInfo.color}50)`
					];
				}

				return [
					`--variant-background: transparent`,
					`--variant-color: var(--${color}700)`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: var(--${color}50)`,
					// Required since we use a specific shade for dark theme
					`--variant-color-dark: var(--${color}200)`
				];
			case 'transparent':
				if (!colorInfo.fromTheme) {
					return [
						`--variant-background: transparent`,
						`--variant-color: ${color}`,
						`--variant-border: 1px solid transparent`,
						`--variant-hover: transparent`
					];
				}

				if (colorInfo.shade !== undefined) {
					return [
						`--variant-background: transparent`,
						`--variant-color: var(--${colorInfo.color}${colorInfo.shade})`,
						`--variant-border: 1px solid transparent`,
						`--variant-hover: transparent`
					];
				}

				return [
					`--variant-background: transparent`,
					`--variant-color: var(--${color}700)`,
					`--variant-border: 1px solid transparent`,
					`--variant-hover: transparent`,
					`--variant-color-dark: var(--${color}800)`
				];
			default:
				return [];
		}
	}

	$: properties = [
		...actionIconVariantVariables(variant, color),
		`--height: ${mapSizeVariable(size, 'size')}`,
		`--width: ${mapSizeVariable(size, 'size')}`,
		`--radius: ${mapSizeVariable(radius, 'radius')}`,
		'display: contents'
	];
	$: componentStyle = properties.join(';').concat(style);
</script>

<!--
@component

Icon button to indicate secondary action.

@see https://svelteui.org/core/action-icon
@example
    ```tsx
    <ActionIcon>Click</ActionIcon> // standard ActionIcon
    <ActionIcon color="red" /> // red ActionIcon
    <ActionIcon variant="default"><Discord></ActionIcon> // default variant with an icon
    ```
-->

<div style={componentStyle}>
	<svelte:element
		this={root}
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class:root
		class:loading
		class={`${buildClass('ActionIcon')} variant-${variant} ${className}`}
		disabled={disabled || loading}
		target={external ? '_blank' : null}
		rel={external ? 'noreferrer noopener' : null}
		tabindex={0}
		{href}
		{...$$restProps}
	>
		{#if loading}
			<Loader size={loaderProps.size} color={loaderProps.color} variant={loaderProps.variant} />
		{:else}
			<slot>+</slot>
		{/if}
	</svelte:element>
</div>

<style>
	@import '$lib/styles/css/index.css';

	* {
		--size-xs: 18px;
		--size-sm: 22px;
		--size-md: 28px;
		--size-lg: 34px;
		--size-xl: 44px;
	}

	.root {
		position: relative;
		appearance: none;
		-webkit-tap-highlight-color: transparent;
		box-sizing: border-box;
		height: var(--height);
		min-height: var(--height);
		width: var(--height);
		min-width: var(--height);
		border-radius: var(--radius);
		background: none;
		background-color: var(--variant-background);
		color: var(--variant-color);
		border: var(--variant-border);
		padding: 0;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		text-decoration: none;
	}

	.root:hover {
		background-color: var(--variant-hover);
	}

	:global(:root[data-theme='dark']) .root.variant-hover {
		color: var(--variant-color-dark);
	}

	:global(:root[data-theme='dark']) .root.variant-hover:hover {
		background-color: var(--dark800);
	}

	:global(:root[data-theme='dark']) .root.variant-transparent {
		color: var(--variant-color-dark);
	}

	.root:disabled {
		pointer-events: none;
		border-color: transparent;
		cursor: not-allowed;
		background-color: var(--gray200);
		color: var(--gray500);
	}

	:global(:root[data-theme='dark']) .root:disabled {
		border-color: transparent;
		background-color: var(--dark400);
		color: var(--dark600);
	}

	.root:not(:disabled):active {
		transform: translateY(1px);
	}

	.root.loading {
		pointer-events: none;
	}

	.root.loading::before {
		content: '';
		position: absolute;
		top: -1;
		left: -1;
		right: -1;
		bottom: -1;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: var(--radius);
		cursor: not-allowed;
	}
</style>

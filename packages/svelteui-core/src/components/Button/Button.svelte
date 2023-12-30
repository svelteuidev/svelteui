<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { buildClass, mapSizeVariable, variantVariables } from '$lib/styles';
	import Loader from '../Loader/Loader.svelte';
	import Ripple from './Ripple.svelte';
	import type { ButtonProps as $$ButtonProps } from './Button';

	interface $$Props extends $$ButtonProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		style: $$Props['style'] = '',
		variant: $$Props['variant'] = 'filled',
		color: $$Props['color'] = undefined,
		size: $$Props['size'] = 'sm',
		radius: $$Props['radius'] = 'sm',
		gradient: $$Props['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		compact: $$Props['compact'] = false,
		fullSize: $$Props['fullSize'] = false,
		loading: $$Props['loading'] = false,
		disabled: $$Props['disabled'] = false,
		loaderPosition: $$Props['loaderPosition'] = 'left',
		loaderProps: $$Props['loaderProps'] = {
			size: 'xs',
			color: 'white',
			variant: 'circle'
		},
		href: $$Props['href'] = null,
		external: $$Props['external'] = false,
		uppercase: $$Props['uppercase'] = false,
		ripple: $$Props['ripple'] = false;
	export { className as class };

	$: properties = [
		...variantVariables(variant, color, gradient),
		`--height: ${mapSizeVariable(size, compact ? 'height-compact' : 'height')}`,
		`--padding-x: ${mapSizeVariable(size, compact ? 'padding-x-compact' : 'padding-x')}`,
		`--fontSize: ${mapSizeVariable(size, 'fontSize')}`,
		`--radius: ${mapSizeVariable(radius, 'radius')}`,
		`--width: ${fullSize ? '100%' : 'fit-content'}`,
		'display: contents'
	];
	$: componentStyle = properties.join(';').concat(style);

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui.org/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
    <Button variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>Click Me</Button> // gradient button
    ```
-->

<div style={componentStyle}>
	{#if href}
		<a
			{href}
			bind:this={element}
			use:useActions={use}
			use:forwardEvents
			class:compact
			class:uppercase
			class:loading
			class:disabled
			class={`${buildClass('Button')} root variant-${variant} ${className}`}
			role="button"
			rel="noreferrer noopener"
			target={external ? '_blank' : '_self'}
			{...$$restProps}
			tabindex="0"
		>
			{#if loading && loaderPosition === 'left'}
				<span class="left-section">
					<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
				</span>
			{:else if $$slots.leftIcon}
				<span class="left-section">
					<slot name="leftIcon">X</slot>
				</span>
			{/if}
			<slot>Button</slot>
			{#if ripple}
				<Ripple center={false} circle={false} />
			{/if}
			{#if loading && loaderPosition === 'right'}
				<span class="right-section">
					<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
				</span>
			{:else if $$slots.rightIcon}
				<span class="right-section">
					<slot name="rightIcon">X</slot>
				</span>
			{/if}
		</a>
	{:else}
		<button
			bind:this={element}
			use:useActions={use}
			use:forwardEvents
			class:compact
			class:uppercase
			class:loading
			class={`${buildClass('Button')} root variant-${variant} ${className}`}
			{disabled}
			{...$$restProps}
			tabindex="0"
		>
			{#if loading && loaderPosition === 'left'}
				<span class="left-section">
					<Loader
						class={buildClass('Button', 'loader')}
						variant={loaderProps.variant}
						size={loaderProps.size}
						color={loaderProps.color}
					/>
				</span>
			{:else if $$slots.leftIcon}
				<span class="left-section">
					<slot name="leftIcon" class={buildClass('Button', 'leftIcon')}>X</slot>
				</span>
			{/if}
			<slot>Button</slot>
			{#if ripple}
				<Ripple center={false} circle={false} />
			{/if}
			{#if loading && loaderPosition === 'right'}
				<span class="right-section">
					<Loader
						class={buildClass('Button', 'loader')}
						variant={loaderProps.variant}
						size={loaderProps.size}
						color={loaderProps.color}
					/>
				</span>
			{:else if $$slots.rightIcon}
				<span class="right-section">
					<slot name="rightIcon" class={buildClass('Button', 'rightIcon')}>X</slot>
				</span>
			{/if}
		</button>
	{/if}
</div>

<style>
	@import '$lib/styles/css/index.css';

	* {
		/* @TODO(migration): use rem */
		--height-xs: 30px;
		--height-sm: 36px;
		--height-md: 42px;
		--height-lg: 50px;
		--height-xl: 60px;

		--height-compact-xs: 22px;
		--height-compact-sm: 26px;
		--height-compact-md: 30px;
		--height-compact-lg: 34px;
		--height-compact-xl: 40px;

		--padding-x-xs: 14px;
		--padding-x-sm: 18px;
		--padding-x-md: 22px;
		--padding-x-lg: 26px;
		--padding-x-xl: 32px;

		--padding-x-compact-xs: 7px;
		--padding-x-compact-sm: 8px;
		--padding-x-compact-md: 10px;
		--padding-x-compact-lg: 12px;
		--padding-x-compact-xl: 14px;
	}

	.root {
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		text-decoration: none;
		outline: none;
		user-select: none;
		appearance: none;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		background-color: var(--variant-background);
		color: var(--variant-color);
		border: var(--variant-border);
		border-radius: var(--radius);
		padding: 0px var(--padding-x);
		height: var(--height);
		font-family: var(--fontFamily-standard);
		font-weight: var(--fontWeight-bold);
		font-size: var(--fontSize);
		line-height: 1;
		flex-grow: 0;
		width: var(--width);
	}

	.root:hover {
		background-color: var(--variant-hover);
	}

	.root:disabled,
	.root.disabled {
		pointer-events: 'none';
		border-color: 'transparent';
		background-color: var(--gray200);
		color: var(--gray500);
		cursor: 'not-allowed';
	}

	.root:active {
		transform: 'translateY(1px)';
	}

	.root.loading {
		pointer-events: none;
	}

	.root.loading::before {
		content: '';
		position: absolute;
		inset: -1;
		background-color: var(--white05);
		border-radius: var(--radius);
		cursor: 'not-allowed';
	}

	.root.uppercase {
		text-transform: uppercase;
	}

	.left-section {
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-section {
		margin-left: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

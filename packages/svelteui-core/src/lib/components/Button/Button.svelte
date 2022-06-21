<script lang="ts">
	import useStyles from './Button.styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { ButtonErrors } from './Button.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import Loader from '../Loader/Loader.svelte';
	import Ripple from './Ripple.svelte';
	import type { ButtonProps as $$ButtonProps, Props } from './Button.styles';

	interface $$Props extends Props {}

	export let use: $$ButtonProps['use'] = [],
		element: $$ButtonProps['element'] = undefined,
		className: $$ButtonProps['className'] = '',
		override: $$ButtonProps['override'] = {},
		variant: $$ButtonProps['variant'] = 'filled',
		color: $$ButtonProps['color'] = 'blue',
		size: $$ButtonProps['size'] = 'sm',
		radius: $$ButtonProps['radius'] = 'sm',
		gradient: $$ButtonProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		loaderPosition: $$ButtonProps['loaderPosition'] = 'left',
		loaderProps: $$ButtonProps['loaderProps'] = {
			size: 'xs',
			color: 'white',
			variant: 'circle'
		},
		href: $$ButtonProps['href'] = null,
		external: $$ButtonProps['external'] = false,
		disabled: $$ButtonProps['disabled'] = false,
		compact: $$ButtonProps['compact'] = false,
		loading: $$ButtonProps['loading'] = false,
		uppercase: $$ButtonProps['uppercase'] = false,
		fullSize: $$ButtonProps['fullSize'] = false,
		ripple: $$ButtonProps['ripple'] = false;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;
	if (disabled && loading) {
		observable = true;
		err = ButtonErrors[0];
	}
	if ((external && typeof href !== 'string') || href?.length < 1) {
		observable = true;
		err = ButtonErrors[1];
	}
	$: if (observable) override = { display: 'none' };
	// --------------Error Handling-------------------
	$: ({ getStyles, cx, classes } = useStyles({
		color,
		compact,
		fullSize,
		gradient,
		radius,
		size,
		variant
	}));
</script>

<Error {observable} component="Button" code={err} />

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

{#if href && !disabled}
	<a
		{href}
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class:compact
		class:uppercase
		class={cx(className, getStyles({ css: override, variation: variant }), { disabled, loading })}
		role="button"
		rel="noreferrer noopener"
		target={external ? '_blank' : '_self'}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if ripple}
			<Ripple center={false} circle={false} />
		{/if}
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</a>
{:else}
	<button
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class={cx(className, getStyles({ css: override, variation: variant }), { disabled, loading })}
		class:compact
		class:uppercase
		{disabled}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if ripple}
			<Ripple center={false} circle={false} />
		{/if}
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</button>
{/if}

<style>
	.uppercase {
		text-transform: uppercase;
	}
	.loader-left {
		margin-right: 10px;
	}
	.loader-right {
		margin-left: 10px;
	}
</style>

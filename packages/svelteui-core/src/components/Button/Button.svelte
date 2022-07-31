<script lang="ts">
	import useStyles from './Button.styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { ButtonErrors } from './Button.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import Loader from '../Loader/Loader.svelte';
	import Ripple from './Ripple.svelte';
	import type { ButtonProps as $$ButtonProps } from './Button.styles';

	interface $$Props extends $$ButtonProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		variant: $$Props['variant'] = 'filled',
		color: $$Props['color'] = 'blue',
		size: $$Props['size'] = 'sm',
		radius: $$Props['radius'] = 'sm',
		gradient: $$Props['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		loaderPosition: $$Props['loaderPosition'] = 'left',
		loaderProps: $$Props['loaderProps'] = {
			size: 'xs',
			color: 'white',
			variant: 'circle'
		},
		href: $$Props['href'] = null,
		external: $$Props['external'] = false,
		disabled: $$Props['disabled'] = false,
		compact: $$Props['compact'] = false,
		loading: $$Props['loading'] = false,
		uppercase: $$Props['uppercase'] = false,
		fullSize: $$Props['fullSize'] = false,
		ripple: $$Props['ripple'] = false;
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
	$: ({ getStyles, cx } = useStyles({
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

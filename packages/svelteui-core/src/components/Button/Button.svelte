<script lang="ts">
	import { useActions } from '$lib/internal';

	import Loader from '../Loader/Loader.svelte';
	import Ripple from './Ripple.svelte';
	import useStyles from './Button.styles';
	import type { ButtonProps } from './Button';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = $bindable({}),
		variant = 'filled',
		color = 'blue',
		size = 'sm',
		radius = 'sm',
		gradient = { from: 'indigo', to: 'cyan', deg: 45 },
		loaderPosition = 'left',
		loaderProps = {
			size: 'xs',
			color: 'white',
			variant: 'circle'
		},
		href = null,
		external = false,
		disabled = false,
		compact = false,
		loading = false,
		uppercase = false,
		fullSize = false,
		ripple = false,
		leftIcon,
		children,
		rightIcon,
		...rest
	}: ButtonProps = $props();
	
	let { cx, classes, getStyles } = $derived(useStyles(
		{
			color,
			compact,
			fullSize,
			gradient,
			radius,
			size,
			variant
		},
		{ name: 'Button' }
	));
</script>

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui.dev/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
    <Button variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>Click Me</Button> // gradient button
    ```
-->

{#if href}
	<a
		{href}
		bind:this={element}
		use:useActions={use}
		class:compact
		class:uppercase
		class={cx(className, classes.root, getStyles({ css: override, variation: variant, disabled }), {
			[classes.disabled]: disabled,
			[classes.loading]: loading
		})}
		role="button"
		rel="noreferrer noopener"
		target={external ? '_blank' : ''}
		{...rest}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="left-section">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if leftIcon}
			<span class="left-section">
				{#if leftIcon}{@render leftIcon()}{:else}X{/if}
			</span>
		{/if}
		{#if children}{@render children()}{:else}Button{/if}
		{#if ripple}
			<Ripple center={false} circle={false} />
		{/if}
		{#if loading && loaderPosition === 'right'}
			<span class="right-section">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if rightIcon}
			<span class="right-section">
				{#if rightIcon}{@render rightIcon()}{:else}X{/if}
			</span>
		{/if}
	</a>
{:else}
	<button
		bind:this={element}
		use:useActions={use}
		class={cx(className, classes.root, getStyles({ css: override, variation: variant }), {
			[classes.disabled]: disabled,
			[classes.loading]: loading
		})}
		class:compact
		class:uppercase
		{disabled}
		{...rest}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="left-section">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if leftIcon}
			<span class="left-section">
				{#if leftIcon}{@render leftIcon()}{:else}X{/if}
			</span>
		{/if}
		{#if children}{@render children()}{:else}Button{/if}
		{#if ripple}
			<Ripple center={false} circle={false} />
		{/if}
		{#if loading && loaderPosition === 'right'}
			<span class="right-section">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if rightIcon}
			<span class="right-section">
				{#if rightIcon}{@render rightIcon()}{:else}X{/if}
			</span>
		{/if}
	</button>
{/if}

<style>
	.uppercase {
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

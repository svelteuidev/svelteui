<script lang="ts">
	import useStyles from './Badge.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Box from '../Box/Box.svelte';
	import type { BadgeProps as $$BadgeProps } from './Badge';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		color?: $$Props['color'];
		variant?: $$Props['variant'];
		gradient?: $$Props['gradient'];
		size?: $$Props['size'];
		radius?: $$Props['radius'];
		fullWidth?: $$Props['fullWidth'];
		leftSection?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		rightSection?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		variant = 'light',
		gradient = { from: 'blue', to: 'cyan', deg: 45 },
		size = 'md',
		radius = 'xl',
		fullWidth = false,
		leftSection,
		children,
		rightSection,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let { cx, classes } = $derived(useStyles(
		{
			color,
			fullWidth,
			size,
			radius,
			gradientDeg: gradient.deg,
			gradientFrom: gradient.from,
			gradientTo: gradient.to
		},
		{ override, name: 'Badge' }
	));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display badge, pill or tag

@see https://svelteui.dev/core/badge
@example
    ```svelte
    <Badge>Badge</Badge>
	<Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
	<Box css={{ width: 120 }}>
		<Badge variant="filled" fullWidth>Badge with overflow</Badge>
	</Box>
    ```
-->
<Box
	use={[forwardEvents, [useActions, use]]}
	bind:element
	class={cx(className, variant, classes.root)}
	{...rest}
>
	{#if leftSection}
		<span class={classes.leftSection}>
			{@render leftSection?.()}
		</span>
	{/if}
	<span class={classes.inner}>{@render children?.()}</span>
	{#if rightSection}
		<span class={classes.rightSection}>
			{@render rightSection?.()}
		</span>
	{/if}
</Box>

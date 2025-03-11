<script lang="ts">
	import useStyles from './Checkbox.styles';
	import { randomID } from '$lib/styles';
	import { useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import ThemeIcon from '../ThemeIcon/ThemeIcon.svelte';
	import CheckboxIcon from './CheckboxIcon.svelte';
	import type { CheckboxProps } from './Checkbox';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		color = 'blue',
		id = randomID(),
		disabled = false,
		value = null,
		checked = $bindable(false),
		indeterminate = false,
		label = null,
		radius = 'sm',
		size = 'md',
		name = '',
		required = false,
		transitionDuration = 100,
		children,
		...rest
	}: CheckboxProps = $props();

	$effect(() => {
		checked = indeterminate || checked;
	});

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, radius, size, transitionDuration }, { name: 'Checkbox' })
	);
</script>

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	<div class={classes.inner}>
		<input
			use:useActions={use}
			bind:checked
			class={classes.input}
			class:disabled
			type="checkbox"
			{disabled}
			{required}
			{value}
			{id}
			{name}
			{...rest}
		/>
		<ThemeIcon class={classes.iconWrapper} variant={null} {size}>
			{#if children}
				{@render children()}
			{:else}
				<CheckboxIcon class={classes.icon} {indeterminate} />
			{/if}
		</ThemeIcon>
	</div>
	{#if label}
		<label class={classes.label} for={id}>
			{label}
		</label>
	{/if}
</Box>

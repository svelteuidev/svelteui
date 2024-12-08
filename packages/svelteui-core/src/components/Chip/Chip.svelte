<script lang="ts">
	import useStyles from './Chip.styles.js';
	import { randomID } from '$lib/styles';
	import { useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import type { ChipProps } from './Chip';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		id = randomID(),
		disabled = false,
		value = undefined,
		checked = $bindable(false),
		label = '',
		radius = 'xl',
		size = 'sm',
		variant = 'outline',
		transitionDuration = 100,
		children,
		...rest
	}: ChipProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, radius, size, transitionDuration }, { name: 'Chip' })
	);
</script>

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	<div class={classes.inputContainer}>
		<input
			use:useActions={use}
			bind:checked
			class={classes.input}
			class:disabled
			type="checkbox"
			{disabled}
			{value}
			{id}
			{...rest}
		/>
	</div>

	<label class={cx(classes.label, variant)} class:checked class:disabled for={id}>
		{#if checked}
			<div class={classes.iconWrapper}>
				<svg
					class={classes.checkIcon}
					viewBox="0 0 10 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		{/if}
		{#if children}
			{@render children()}
		{:else}
			{label}
		{/if}
	</label>
</Box>

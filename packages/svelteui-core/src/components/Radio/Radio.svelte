<script lang="ts" module>
	export const ctx = 'Radio';
</script>

<script lang="ts">
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import useStyles from './Radio.styles';
	import type { RadioProps } from './Radio';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		color = 'blue',
		id = randomID(),
		disabled = false,
		value = undefined,
		checked = $bindable(false),
		label: labelText = '',
		error = false,
		labelDirection = 'left',
		size = 'sm',
		name = '',
		group = $bindable(null),
		children,
		...rest
	}: RadioProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, size, labelDirection, error }, { name: 'Radio' })
	);

	function onChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		checked = e.currentTarget.checked;
	}
</script>

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	<div class={classes.container}>
		<div class={classes.inputContainer}>
			{#if group}
				<input
					bind:group
					class={classes.input}
					class:disabled
					type="radio"
					{name}
					{disabled}
					{value}
					{id}
					{...rest}
					use:useActions={use}
				/>
			{:else}
				<input
					class={classes.input}
					class:disabled
					type="radio"
					{checked}
					{name}
					{disabled}
					{value}
					{id}
					{...rest}
					onchange={onChange}
					use:useActions={use}
				/>
			{/if}
			<div class={classes.inner} aria-hidden={true}></div>
		</div>
		<label class={classes.label} class:disabled for={id}>
			{#if children}
				{@render children()}
			{:else}
				{labelText}
			{/if}
		</label>
	</div>
</Box>

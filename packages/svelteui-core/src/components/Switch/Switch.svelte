<script lang="ts">
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import useStyles from './Switch.styles';
	import type { SwitchProps } from './Switch';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		size = 'sm',
		radius = 'xl',
		insideLabelSize = undefined,
		transitionFunction = 'linear',
		id = randomID(),
		label = '',
		onLabel = '',
		offLabel = '',
		disabled = false,
		checked = $bindable(false)
	}: SwitchProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				color,
				offLabel,
				onLabel,
				insideLabelSize,
				radius,
				size,
				transitionFunction
			},
			{ name: 'Switch' }
		)
	);
</script>

<div class={cx(className, classes.root)}>
	<input
		bind:this={element}
		{id}
		{disabled}
		use:useActions={use}
		bind:checked
		type="checkbox"
		class={cx(className, classes.input, getStyles({ css: override }))}
		class:disabled
	/>
	{#if label}
		<label for={id} class={classes.label}>
			{label}
		</label>
	{/if}
</div>

<style>
	.switch {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.label {
		padding-left: 10px;
	}
</style>

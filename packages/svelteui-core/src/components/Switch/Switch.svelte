<script lang="ts">
	import useStyles from './Switch.styles';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { SwitchProps as $$SwitchProps } from './Switch.styles';

	interface $$Props extends $$SwitchProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		size: $$Props['size'] = 'sm',
		radius: $$Props['radius'] = 'xl',
		transitionFunction: $$Props['transitionFunction'] = 'linear',
		id: $$Props['id'] = randomID(),
		label: $$Props['label'] = '',
		onLabel: $$Props['onLabel'] = '',
		offLabel: $$Props['offLabel'] = '',
		disabled: $$Props['disabled'] = false,
		checked: $$Props['checked'] = false;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles({
		color,
		offLabel,
		onLabel,
		radius,
		size,
		transitionFunction
	}));
</script>

<!--
@component

A user can use this component to enable/disable something, normally used for boolean values or for binary actions.

@see https://svelteui.org/core/switch
@example
    ```tsx
    <Switch/> // standard switch
    <Switch label="Lights" onLabel="ON" offLabel="OFF"/> // switch with labels
    ```
-->
<div class={cx('switch', classes.root, className)}>
	<input
		bind:this={element}
		{id}
		{disabled}
		use:useActions={use}
		use:forwardEvents
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

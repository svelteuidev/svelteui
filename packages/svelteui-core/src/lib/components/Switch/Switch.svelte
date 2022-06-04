<script lang="ts">
	import useStyles from './Switch.styles';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { SwitchProps as $$SwitchProps } from './Switch.styles';

	export let use: $$SwitchProps['use'] = [],
		element: $$SwitchProps['element'] = undefined,
		className: $$SwitchProps['className'] = '',
		override: $$SwitchProps['override'] = {},
		color: $$SwitchProps['color'] = 'blue',
		size: $$SwitchProps['size'] = 'sm',
		radius: $$SwitchProps['radius'] = 'xl',
		transitionFunction: $$SwitchProps['transitionFunction'] = 'linear',
		id: $$SwitchProps['id'] = randomID(),
		label: $$SwitchProps['label'] = '',
		onLabel: $$SwitchProps['onLabel'] = '',
		offLabel: $$SwitchProps['offLabel'] = '',
		disabled: $$SwitchProps['disabled'] = false,
		checked: $$SwitchProps['checked'] = false;
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
<div class="switch {className}" class:disabled>
	<input
		bind:this={element}
		{id}
		use:useActions={use}
		use:forwardEvents
		bind:checked
		type="checkbox"
		class={cx(className, getStyles({ css: override }))}
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
	}

	.label {
		padding-left: 10px;
	}
</style>

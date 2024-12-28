<script lang="ts">
	import useStyles from './Day.styles';
	import { getDayTabIndex } from './get-day-tab-index/get-day-tab-index';
	import { getDayAutofocus } from './get-day-autofocus/get-day-autofocus';
	import { createEventForwarder, useActions } from '@svelteuidev/core';
	import { get_current_component } from 'svelte/internal';
	import type { DayProps as $$DayProps } from './Day.styles';

	interface Props {
		use?: $$DayProps['use'];
		element?: $$DayProps['element'];
		class?: $$DayProps['className'];
		override?: $$DayProps['override'];
		value?: $$DayProps['value'];
		selected?: $$DayProps['selected'];
		weekend?: $$DayProps['weekend'];
		outside?: $$DayProps['outside'];
		disabled?: $$DayProps['disabled'];
		hasValue?: $$DayProps['hasValue'];
		inRange?: $$DayProps['inRange'];
		firstInRange?: $$DayProps['firstInRange'];
		lastInRange?: $$DayProps['lastInRange'];
		size?: $$DayProps['size'];
		fullWidth?: $$DayProps['fullWidth'];
		firstInMonth?: $$DayProps['firstInMonth'];
		focusable?: $$DayProps['focusable'];
		hideOutsideDates?: $$DayProps['hideOutsideDates'];
		primaryColor?: $$DayProps['primaryColor'];
		onMouseEnter?: $$DayProps['onMouseEnter'];
		renderDay?: $$DayProps['renderDay'];
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		value = null,
		selected = null,
		weekend = null,
		outside = null,
		disabled = null,
		hasValue = null,
		inRange = null,
		firstInRange = null,
		lastInRange = null,
		size = null,
		fullWidth = null,
		firstInMonth = null,
		focusable = null,
		hideOutsideDates = null,
		primaryColor = 'blue',
		onMouseEnter = (date: Date, event: MouseEvent) => null,
		renderDay = undefined
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let { cx, classes } = $derived(useStyles(
		{ size, fullWidth, primaryColor, hideOutsideDates },
		{ override }
	));
</script>

<button
	type="button"
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	onmouseenter={(event) => onMouseEnter(value, event)}
	tabindex={getDayTabIndex({ focusable, hasValue, selected, firstInMonth })}
	data-autofocus={getDayAutofocus({ hasValue, selected, firstInMonth })}
	data-svelteui-stop-propagation
	class={cx(
		classes.root,
		{
			outside,
			weekend,
			selected,
			inRange,
			firstInRange,
			lastInRange,
			disabled
		},
		className
	)}
	{disabled}
>
	{typeof renderDay === 'function' ? renderDay(value) : value.getDate()}
</button>

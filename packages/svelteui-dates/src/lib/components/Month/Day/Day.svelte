<script lang="ts">
	import useStyles from './Day.styles';
	import { getDayTabIndex } from './get-day-tab-index/get-day-tab-index';
	import { getDayAutofocus } from './get-day-autofocus/get-day-autofocus';
	import { createEventForwarder, useActions } from '@svelteuidev/core';
	import { get_current_component } from 'svelte/internal';
	import type { DayProps as $$DayProps } from './Day.styles';

	export let use: $$DayProps['use'] = [],
		element: $$DayProps['element'] = undefined,
		className: $$DayProps['className'] = '',
		override: $$DayProps['override'] = {},
		value: $$DayProps['value'] = null,
		selected: $$DayProps['selected'] = null,
		weekend: $$DayProps['weekend'] = null,
		outside: $$DayProps['outside'] = null,
		disabled: $$DayProps['disabled'] = null,
		hasValue: $$DayProps['hasValue'] = null,
		inRange: $$DayProps['inRange'] = null,
		firstInRange: $$DayProps['firstInRange'] = null,
		lastInRange: $$DayProps['lastInRange'] = null,
		size: $$DayProps['size'] = null,
		fullWidth: $$DayProps['fullWidth'] = null,
		firstInMonth: $$DayProps['firstInMonth'] = null,
		focusable: $$DayProps['focusable'] = null,
		hideOutsideDates: $$DayProps['hideOutsideDates'] = null,
		primaryColor: $$DayProps['primaryColor'] = 'blue',
		onMouseEnter: $$DayProps['onMouseEnter'] = (date: Date, event: MouseEvent) => null,
		renderDay: $$DayProps['renderDay'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes } = useStyles(
		{ size, fullWidth, primaryColor, hideOutsideDates },
		{ override }
	));
</script>

<button
	type="button"
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	on:mouseenter={(event) => onMouseEnter(value, event)}
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

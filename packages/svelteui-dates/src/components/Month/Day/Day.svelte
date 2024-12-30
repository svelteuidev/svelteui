<script lang="ts">
	import { useActions } from '@svelteuidev/core';

	import useStyles from './Day.styles';
	import { getDayTabIndex } from './get-day-tab-index/get-day-tab-index';
	import { getDayAutofocus } from './get-day-autofocus/get-day-autofocus';
	import type { DayProps } from './Day.styles';

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
		renderDay = undefined,
		...rest
	}: DayProps = $props();

	let { cx, classes } = $derived(
		useStyles({ size, fullWidth, primaryColor, hideOutsideDates }, { override })
	);
</script>

<button
	type="button"
	bind:this={element}
	use:useActions={use}
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
	{...rest}
>
	{typeof renderDay === 'function' ? renderDay(value) : value.getDate()}
</button>

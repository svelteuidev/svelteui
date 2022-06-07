<script lang="ts">
	/* eslint-disable no-undef */
	import dayjs from 'dayjs';
	import useStyles, { no } from './Month.styles';
	import { Day } from './Day';
	import { Box, Text } from '@svelteuidev/core';
	import { getDayProps } from './get-day-props/get-day-props';
	import { upperFirst } from '@svelteuidev/composables';
	import { getMonthDays, getWeekdaysNames, isSameDate } from '../../utils';
	import { createEventForwarder, useActions } from '@svelteuidev/core';
	import { get_current_component } from 'svelte/internal';
	import type { MonthProps as $$MonthProps } from './Month.styles';

	export let use: $$MonthProps['use'] = [],
		element: $$MonthProps['element'] = undefined,
		className: $$MonthProps['className'] = '',
		override: $$MonthProps['override'] = {},
		// daysRefs: $$MonthProps['daysRefs'] = undefined,
		disableOutsideEvents: $$MonthProps['disableOutsideEvents'] = false,
		month: $$MonthProps['month'],
		locale: $$MonthProps['locale'] = 'en',
		value: $$MonthProps['value'] = undefined,
		range: $$MonthProps['range'] = undefined,
		weekdayLabelFormat: $$MonthProps['weekdayLabelFormat'] = undefined,
		minDate: $$MonthProps['minDate'] = undefined,
		maxDate: $$MonthProps['maxDate'] = undefined,
		hideWeekdays: $$MonthProps['hideWeekdays'] = false,
		size: $$MonthProps['size'] = 'sm',
		fullWidth: $$MonthProps['fullWidth'] = false,
		preventFocus: $$MonthProps['preventFocus'] = false,
		focusable: $$MonthProps['focusable'] = true,
		firstDayOfWeek: $$MonthProps['firstDayOfWeek'] = 'monday',
		hideOutsideDates: $$MonthProps['hideOutsideDates'] = false,
		onChange: $$MonthProps['onChange'] = (value) => undefined,
		onDayMouseEnter: $$MonthProps['onDayMouseEnter'] = undefined,
		onDayKeyDown: $$MonthProps['onDayKeyDown'] = undefined,
		renderDay: $$MonthProps['renderDay'] = undefined,
		// dayStyle: $$MonthProps['dayStyle'] = undefined,
		dayClassName: $$MonthProps['dayClassName'] = undefined,
		excludeDate: $$MonthProps['excludeDate'] = undefined,
		isDateInRange: $$MonthProps['isDateInRange'] = no,
		isDateFirstInRange: $$MonthProps['isDateFirstInRange'] = no,
		isDateLastInRange: $$MonthProps['isDateLastInRange'] = no;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	const castType = <T,>(value: unknown) => value as T
	const days = getMonthDays(month, firstDayOfWeek);
	const hasValue = Array.isArray(value)
		? value.every((item) => item instanceof Date)
		: value instanceof Date;
	const hasValueInMonthRange =
		value instanceof Date &&
		dayjs(value).isAfter(dayjs(month).startOf('month')) &&
		dayjs(value).isBefore(dayjs(month).endOf('month'));

	$: ({ cx, classes, getStyles } = useStyles({ fullWidth }));
</script>

<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	root="table"
	class={cx(className, getStyles({ css: override }))}
	{...$$restProps}
>
	{#if !hideWeekdays}
		<thead>
			<tr>
				{#each getWeekdaysNames(locale, firstDayOfWeek, weekdayLabelFormat) as weekday}
					<th class={classes.weekdayCell}>
						<Text align='center' {size} class={classes.weekday}>
							{weekday.length >= 2 ? upperFirst(weekday) : weekday}
						</Text>
					</th>
				{/each}
			</tr>
		</thead>
	{/if}
	<tbody>
		{#each days as row, rowIndex}
			<tr>
				{#each row as date, cellIndex}
					{@const dayProps = getDayProps({date, month, hasValue, minDate, maxDate, value, excludeDate, disableOutsideEvents, range})}
					{@const onKeyDownPayload = {rowIndex, cellIndex, date}}
					<td>
						<Day
							on:click={() => {
								typeof onChange === 'function' && onChange(date)
							}}
							on:mousedown={(event) => preventFocus && event.preventDefault()}
							on:keydown={(event) => typeof onDayKeyDown === 'function' && onDayKeyDown(onKeyDownPayload, castType(event))
							}
							value={date}
							outside={dayProps.outside}
							weekend={dayProps.weekend}
							inRange={dayProps.inRange || isDateInRange(date, dayProps)}
							firstInRange={dayProps.firstInRange || isDateFirstInRange(date, dayProps)}
							lastInRange={dayProps.lastInRange || isDateLastInRange(date, dayProps)}
							firstInMonth={
							hideOutsideDates
								? isSameDate(date, dayjs(month).startOf('month').toDate())
								: cellIndex === 0 && rowIndex === 0
							}
							selected={dayProps.selected || dayProps.selectedInRange}
							hasValue={hasValueInMonthRange}
							class={typeof dayClassName === 'function' ? dayClassName(date, dayProps) : null}
							disabled={dayProps.disabled}
							onMouseEnter={typeof onDayMouseEnter === 'function' ? onDayMouseEnter : no}
							{size}
							{fullWidth}
							{focusable}
							{hideOutsideDates}
							{renderDay}
						/>
					</td> 
				{/each}
			</tr>
		{/each}
	</tbody>
</Box>

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

	interface Props {
		use?: $$MonthProps['use'];
		element?: $$MonthProps['element'];
		class?: $$MonthProps['className'];
		override?: $$MonthProps['override'];
		disableOutsideEvents?: $$MonthProps['disableOutsideEvents'];
		month: $$MonthProps['month'];
		locale?: $$MonthProps['locale'];
		value?: $$MonthProps['value'];
		range?: $$MonthProps['range'];
		weekdayLabelFormat?: $$MonthProps['weekdayLabelFormat'];
		minDate?: $$MonthProps['minDate'];
		maxDate?: $$MonthProps['maxDate'];
		hideWeekdays?: $$MonthProps['hideWeekdays'];
		size?: $$MonthProps['size'];
		fullWidth?: $$MonthProps['fullWidth'];
		preventFocus?: $$MonthProps['preventFocus'];
		focusable?: $$MonthProps['focusable'];
		firstDayOfWeek?: $$MonthProps['firstDayOfWeek'];
		hideOutsideDates?: $$MonthProps['hideOutsideDates'];
		onChange?: $$MonthProps['onChange'];
		onDayMouseEnter?: $$MonthProps['onDayMouseEnter'];
		onDayKeyDown?: $$MonthProps['onDayKeyDown'];
		renderDay?: $$MonthProps['renderDay'];
		dayClassName?: $$MonthProps['dayClassName'];
		excludeDate?: $$MonthProps['excludeDate'];
		isDateInRange?: $$MonthProps['isDateInRange'];
		isDateFirstInRange?: $$MonthProps['isDateFirstInRange'];
		isDateLastInRange?: $$MonthProps['isDateLastInRange'];
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		disableOutsideEvents = false,
		month,
		locale = 'en',
		value = undefined,
		range = undefined,
		weekdayLabelFormat = undefined,
		minDate = undefined,
		maxDate = undefined,
		hideWeekdays = false,
		size = 'sm',
		fullWidth = false,
		preventFocus = false,
		focusable = true,
		firstDayOfWeek = 'monday',
		hideOutsideDates = false,
		onChange = (value) => undefined,
		onDayMouseEnter = undefined,
		onDayKeyDown = undefined,
		renderDay = undefined,
		dayClassName = undefined,
		excludeDate = undefined,
		isDateInRange = no,
		isDateFirstInRange = no,
		isDateLastInRange = no,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	const castType = <T>(value: unknown) => value as T;
	const days = getMonthDays(month, firstDayOfWeek);
	const hasValue = Array.isArray(value)
		? value.every((item) => item instanceof Date)
		: value instanceof Date;
	const hasValueInMonthRange =
		value instanceof Date &&
		dayjs(value).isAfter(dayjs(month).startOf('month')) &&
		dayjs(value).isBefore(dayjs(month).endOf('month'));

	let { cx, classes } = $derived(useStyles({ fullWidth }, { override }));
</script>

<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	root="table"
	class={cx(className, classes.root)}
	{...rest}
>
	{#if !hideWeekdays}
		<thead>
			<tr>
				{#each getWeekdaysNames(locale, firstDayOfWeek, weekdayLabelFormat) as weekday}
					<th class={classes.weekdayCell}>
						<Text align="center" {size} class={classes.weekday}>
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
					{@const dayProps = getDayProps({
						date,
						month,
						hasValue,
						minDate,
						maxDate,
						value,
						excludeDate,
						disableOutsideEvents,
						range
					})}
					{@const onKeyDownPayload = { rowIndex, cellIndex, date }}
					<td class={classes.cell}>
						<Day
							on:click={() => {
								typeof onChange === 'function' && onChange(date);
							}}
							on:mousedown={(event) => preventFocus && event.preventDefault()}
							on:keydown={(event) =>
								typeof onDayKeyDown === 'function' &&
								onDayKeyDown(onKeyDownPayload, castType(event))}
							value={date}
							outside={dayProps.outside}
							weekend={dayProps.weekend}
							inRange={dayProps.inRange || isDateInRange(date, dayProps)}
							firstInRange={dayProps.firstInRange || isDateFirstInRange(date, dayProps)}
							lastInRange={dayProps.lastInRange || isDateLastInRange(date, dayProps)}
							firstInMonth={hideOutsideDates
								? isSameDate(date, dayjs(month).startOf('month').toDate())
								: cellIndex === 0 && rowIndex === 0}
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

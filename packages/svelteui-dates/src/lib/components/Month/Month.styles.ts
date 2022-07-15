import { createStyles } from '@svelteuidev/core';
import type { DefaultProps, SvelteUISize, CSS } from '@svelteuidev/core';
import type { DayModifiers, DayKeydownPayload } from './types';
import type { FirstDayOfWeek } from '../../types';

export interface MonthProps extends DefaultProps, MonthSettings {
	month: Date;
	locale?: string;
	value?: Date | Date[];
	range?: [Date, Date];
	daysRefs?: HTMLButtonElement[][];
	weekdayLabelFormat?: string;
	onChange?(value: Date): void;
	onDayMouseEnter?(date: Date, event: MouseEvent): void;
	onDayKeyDown?(payload: DayKeydownPayload, event: KeyboardEvent): void;
	renderDay?(date: Date): unknown;
}

interface MonthStyleParams {
	fullWidth: boolean;
}

export interface MonthSettings {
	disableOutsideEvents?: boolean;
	minDate?: Date;
	maxDate?: Date;
	hideWeekdays?: boolean;
	size?: SvelteUISize;
	fullWidth?: boolean;
	preventFocus?: boolean;
	focusable?: boolean;
	firstDayOfWeek?: FirstDayOfWeek;
	hideOutsideDates?: boolean;
	dayStyle?(date: Date, modifiers: DayModifiers): CSS;
	dayClassName?(date: Date, modifiers: DayModifiers): string;
	excludeDate?(date: Date): boolean;
	isDateInRange?(date: Date, modifiers: DayModifiers): boolean;
	isDateFirstInRange?(date: Date, modifiers: DayModifiers): boolean;
	isDateLastInRange?(date: Date, modifiers: DayModifiers): boolean;
}

export const no = () => false;

export default createStyles((theme, { fullWidth }: MonthStyleParams) => {
	return {
		root: {
			borderCollapse: 'collapse',
			width: fullWidth ? '100%' : 'auto',
			tableLayout: 'fixed'
		},
		weekday: {
			darkMode: {
				color: theme.fn.themeColor('dark', 1)
			},
			color: theme.fn.themeColor('gray', 5)
		},

		cell: {
			boxSizing: 'border-box',
			padding: 0,
			borderTop: '1px solid transparent'
		},

		weekdayCell: {
			boxSizing: 'border-box',
			padding: 0,
			fontWeight: 'normal',
			paddingBottom: +theme.space.xs.value / 2,
			textAlign: 'center',
			cursor: 'default',
			userSelect: 'none'
		}
	};
});

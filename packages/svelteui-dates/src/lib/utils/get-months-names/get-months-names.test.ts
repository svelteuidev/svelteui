import 'dayjs/locale/ru';
import { getMonthsNames } from './get-months-names';
import { describe, test, expect } from 'vitest';

describe('@svelteuidev/dates/get-months-names', () => {
	test('returns months names with given locale and format', () => {
		expect(getMonthsNames('en', 'MMMM')).toStrictEqual([
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]);

		expect(getMonthsNames('ru', 'MMMM')).toStrictEqual([
			'январь',
			'февраль',
			'март',
			'апрель',
			'май',
			'июнь',
			'июль',
			'август',
			'сентябрь',
			'октябрь',
			'ноябрь',
			'декабрь'
		]);
	});
});

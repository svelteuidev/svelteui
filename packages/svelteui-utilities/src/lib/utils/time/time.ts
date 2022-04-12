export type DateTimeOptions = DateOptions & TimeOptions;

export type DateOptions = {
	day?: boolean;
	month?: boolean;
	year?: boolean;
}

export type TimeOptions = {
	hours?: boolean;
	minutes?: boolean;
	seconds?: boolean;
}

export const dateTimeString = (
	timestamp: number,
	separator: string = ' ',
	dateSeparator: string = '/',
	timeSeparator: string = ':',
    utc: boolean = false,
	options: DateTimeOptions = {
		day: true,
		month: true,
		year: true,
		hours: true,
		minutes: true,
		seconds: true
	}
): string => {
	return utc
		? `${dateStringUTC(timestamp, dateSeparator, options)}${separator}${timeStringUTC(
				timestamp,
				timeSeparator,
				options
		  )}`
		: `${dateString(timestamp, dateSeparator, utc, options)}${separator}${timeString(
				timestamp,
				timeSeparator,
                utc,
				options
		  )}`;
}

export const dateString = (
	timestamp: number,
	separator: string = '/',
    utc: boolean = false,
	options: DateOptions = { day: true, month: true, year: true }
): string => {
	if (utc) return dateStringUTC(timestamp, separator, options);

	const buffer: Array<string> = Array(3);
	const { day, month, year } = options;

	const date: Date = new Date(timestamp);
	const dayS: string = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
	const monthN: number = date.getMonth() + 1;
	const monthS: string = monthN < 10 ? `0${monthN}` : monthN.toString();
	const yearS: string = date.getFullYear().toString();
	if (day) buffer.push(dayS);
	if (month) buffer.push(monthS);
	if (year) buffer.push(yearS);
	return buffer.join(separator);
}

const dateStringUTC = (
	timestamp: number,
	separator: string = '/',
	options: DateOptions = { day: true, month: true, year: true }
): string => {
	const buffer: Array<string> = [];
	const { day, month, year } = options;

	const date: Date = new Date(timestamp);
	const dayS: string =
		date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate().toString();
	const monthN: number = date.getUTCMonth() + 1;
	const monthS: string = monthN < 10 ? `0${monthN}` : monthN.toString();
	const yearS: string = date.getUTCFullYear().toString();
	if (day) buffer.push(dayS);
	if (month) buffer.push(monthS);
	if (year) buffer.push(yearS);
	return buffer.join(separator);
}

export const timeString = (
	timestamp: number,
	separator: string = ':',
    utc: boolean = false,
	options: TimeOptions = { hours: true, minutes: true, seconds: true }
): string => {
	if (utc) return timeStringUTC(timestamp, separator, options);
	const buffer: Array<string> = [];
	const { hours, minutes, seconds } = options;

	const date: Date = new Date(timestamp);
	const hoursS = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString();
	const minutesS = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString();
	const secondsS = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds().toString();
	if (hours) buffer.push(hoursS);
	if (minutes) buffer.push(minutesS);
	if (seconds) buffer.push(secondsS);
	return buffer.join(separator);
}

const timeStringUTC = (
	timestamp: number,
	separator: string = ':',
	options: TimeOptions = { hours: true, minutes: true, seconds: true}
) => {
	const buffer: Array<string> = [];
	const { hours, minutes, seconds } = options;

	const date: Date = new Date(timestamp);
	const hoursS: string =
		date.getUTCHours() < 10 ? `0${date.getUTCHours()}` : date.getUTCHours().toString();
	const minutesS: string =
		date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes().toString();
	const secondsS: string =
		date.getUTCSeconds() < 10 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds().toString();
	if (hours) buffer.push(hoursS);
	if (minutes) buffer.push(minutesS);
	if (seconds) buffer.push(secondsS);
	return buffer.join(separator);
}

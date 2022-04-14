export const dateTimeString = (
	timestamp: number,
	locale: string = undefined,
	options: Intl.DateTimeFormatOptions = {
		dateStyle: "short",
		timeStyle: "short"
	}
): string => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat(locale, options).format(date);
}
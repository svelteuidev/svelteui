export function validateJson(getValue: () => string, deserialize: typeof JSON.parse) {
	const value = getValue();

	if (!value || (typeof value === 'string' && value.trim().length === 0)) {
		return true;
	}

	try {
		deserialize(value);
		return true;
	} catch (e) {
		return false;
	}
}

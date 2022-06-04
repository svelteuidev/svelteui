export interface GetSize {
	size: string | number;
	sizes: Record<string, any>;
}

export function size(props: GetSize): number {
	if (typeof props.size === 'number') {
		return props.size;
	}

	if (typeof props.sizes[props.size] === 'number') {
		return props.sizes[props.size];
	}

	return +props.sizes[props.size]?.value || +props.sizes.md?.value;
}

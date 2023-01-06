export interface SelectItem {
	value: string;
	label?: string;
	disabled?: boolean;
	// group?: string; // @TODO: support grouped items
	[key: string]: any;
}

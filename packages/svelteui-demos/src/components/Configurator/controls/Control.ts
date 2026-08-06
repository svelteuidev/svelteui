export interface ControlProps<T = string> {
	value: T;
	label: string;
	onchange: (value: T) => void;
	[key: string]: any;
}

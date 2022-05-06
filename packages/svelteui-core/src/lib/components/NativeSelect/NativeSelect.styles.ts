import type { DefaultProps, Override, SvelteUISize } from '$lib/styles';
import type { InputBaseProps } from '../Input/Input.styles';
import type { InputWrapperBaseProps } from '../InputWrapper/InputWrapper.styles';
import type { SelectItem } from '../Select/types';

export interface NativeSelectProps extends DefaultProps, InputBaseProps, InputWrapperBaseProps {
	/** id is used to bind input and label, if not passed unique id will be generated for each input */
	id: string;
	/** Adds hidden option to select and sets it as selected if value is not present */
	placeholder: string;
	/** Data used to render options */
	data: (string | SelectItem)[];
	/** Style properties added to select element */
	inputStyle: Override['props'];
	/** Props passed to root element (InputWrapper component) */
	wrapperProps: Record<string, unknown>;
	/** Input size */
	size: SvelteUISize;
}

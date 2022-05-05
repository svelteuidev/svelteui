import type { DefaultProps, SvelteuiSize } from '$lib/styles';
import type { SvelteNode } from '$lib/internal';

export interface InputWrapperBaseProps extends DefaultProps {
	label: string;
	description: string;
	error: string;
	required: boolean;
	labelProps: Record<string, any>;
	descriptionProps: Record<string, any>;
	errorProps: Record<string, any>;
}
export interface InputWrapperProps extends InputWrapperBaseProps {
	id: string;
	labelElement: 'label' | 'div';
	size: SvelteuiSize;
}

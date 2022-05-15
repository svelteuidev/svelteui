import type { Override } from '$lib/styles';
import type { TextProps } from '../Text/Text.styles';

export interface AnchorProps extends TextProps {
	className: string;
	override: Override['props'];
	root: TextProps['root'];
}

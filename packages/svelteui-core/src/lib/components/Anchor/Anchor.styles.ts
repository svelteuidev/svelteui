import type { TextProps } from '../Text/Text.styles';

export interface AnchorProps extends TextProps {
	className: string;
	root: TextProps['root'];
}

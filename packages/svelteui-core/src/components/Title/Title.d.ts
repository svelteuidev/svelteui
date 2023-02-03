import { TextProps } from '../Text/Text';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export type HTMLHeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends TextProps<HTMLHeadingElement> {
	order?: TitleOrder;
}

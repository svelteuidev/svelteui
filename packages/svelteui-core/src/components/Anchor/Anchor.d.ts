import { DefaultProps } from '$lib/styles';
import { TextProps } from '../Text/Text';

export type AnchorVariant = 'filled' | 'outline' | 'light';

export interface AnchorProps extends DefaultProps<HTMLAnchorElement>, TextProps<HTMLAnchorElement> {
	root?: TextProps['root'];
	external?: boolean;
}

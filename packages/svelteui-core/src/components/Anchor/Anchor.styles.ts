import { createStyles } from '$lib/styles';
import type { TextProps } from '../Text/Text.styles';

export interface AnchorProps extends TextProps {
	root?: TextProps['root'];
	external?: boolean;
}

export default createStyles(() => {
	return {
		root: {
			backgroundColor: 'transparent',
			cursor: 'pointer',
			padding: 0,
			border: 0
		}
	};
});

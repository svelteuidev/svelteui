import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface CardProps extends DefaultProps {
	p: SvelteUINumberSize;
}

export default createStyles((theme) => {
	return {
		root: {
			[`${theme.dark} &`]: {
				backgroundColor: theme.fn.themeColor('dark', 6)
			},
			position: 'relative',
			overflow: 'hidden',
			backgroundColor: 'white'
		}
	};
});

import { createStyles } from '$lib/styles';

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

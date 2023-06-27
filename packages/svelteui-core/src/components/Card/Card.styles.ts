import { createStyles } from '$lib/styles';

export default createStyles((theme) => {
	return {
		root: {
			position: 'relative',
			overflow: 'hidden',
			backgroundColor: theme.colors.white.value
		}
	};
});

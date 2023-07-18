import { createStyles, type SvelteUIColor } from '$lib/styles';

export interface MarkStyleParams {
	color: SvelteUIColor;
}

export default createStyles((theme, { color }: MarkStyleParams) => {
	return {
		root: {
			backgroundColor: theme.fn.themeColor(color, 2),
			darkMode: {
				backgroundColor: theme.fn.themeColor(color, 5),
				color: theme.colors.dark900.value
			}
		}
	};
});

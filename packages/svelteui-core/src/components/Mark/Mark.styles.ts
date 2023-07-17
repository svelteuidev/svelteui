import { createStyles, type SvelteUIColor, type ColorScheme } from '$lib/styles';

export interface MarkStyleParams {
	color: SvelteUIColor;
	colorScheme: ColorScheme;
}

export default createStyles((theme, { color }: MarkStyleParams) => {
	return {
		root: {
			backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 2)
		}
	};
});

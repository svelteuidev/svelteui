import { useSvelteUITheme } from '$lib/styles/SvelteUIProvider';
import type { SvelteUITheme } from '$lib/styles/engine/types';
import type { CSS } from '$lib/styles';

type Sx = CSS | ((theme: SvelteUITheme) => CSS);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: SvelteUITheme) {
	return typeof sx === 'function' ? sx(theme) : sx;
}

// export function useSx(sx: BoxSx, systemProps: MantineStyleSystemProps, className: string) {
//     const theme = useSvelteUITheme()
// 	const { css, cx } = useCss();

// 	if (Array.isArray(sx)) {
// 		return cx(
// 			className,
// 			css(getSystemStyles(systemProps, theme)),
// 			sx.map((partial) => css(extractSx(partial, theme)))
// 		);
// 	}

// 	return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
// }

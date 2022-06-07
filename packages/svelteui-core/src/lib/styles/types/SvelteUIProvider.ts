import type { ProviderStyles, SvelteUIDefaultProps } from '../SvelteUIProvider/svelteui.provider';
import type { SvelteUITheme } from '../engine/types';
import type { ColorScheme, DefaultProps, CSS } from './index';

export interface SvelteUIProviderProps extends DefaultProps<HTMLDivElement> {
	theme?: SvelteUITheme;
	styles?: ProviderStyles;
	defaultProps?: SvelteUIDefaultProps;
	themeObserver?: ColorScheme;
	withNormalizeCSS?: boolean;
	withGlobalStyles?: boolean;
	ssr?: boolean;
	config?: SvelteUIProviderConfig;
	inherit?: boolean;
}

export interface SvelteUIProviderConfig {
	theme?: Record<string, string>;
	light: { bg: CSS['backgroundColor']; color: CSS['color'] };
	dark: { bg: CSS['backgroundColor']; color: CSS['color'] };
}

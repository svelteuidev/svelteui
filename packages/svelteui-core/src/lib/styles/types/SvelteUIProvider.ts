import type { ColorScheme, DefaultProps, CSS } from './index';

export interface SvelteUIProviderProps extends DefaultProps {
	themeObserver: ColorScheme;
	withNormalizeCSS: boolean;
	withGlobalStyles: boolean;
	ssr: boolean;
	config: SvelteUIProviderConfig;
}

export interface SvelteUIProviderConfig {
	theme?: Record<string, string>;
	light: { bg: CSS['backgroundColor']; color: CSS['color'] };
	dark: { bg: CSS['backgroundColor']; color: CSS['color'] };
}

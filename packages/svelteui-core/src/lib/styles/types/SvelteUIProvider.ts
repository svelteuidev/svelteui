import type { ColorScheme, DefaultProps } from './index';

export interface SvelteUIProviderProps extends DefaultProps {
	themeObserver: ColorScheme;
	withNormalizeCSS: boolean;
	withGlobalStyles: boolean;
	ssr: boolean;
}

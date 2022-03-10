import type { SvelteuiThemeBase, SvelteuiColor } from '../../types';
interface GetSharedColorScheme {
    color?: SvelteuiColor;
    variant: 'outline' | 'filled' | 'light' | 'gradient' | 'white' | 'default' | 'subtle';
    gradient?: {
        from: SvelteuiColor;
        to: SvelteuiColor;
        deg: number;
    };
    theme: SvelteuiThemeBase;
}
export interface SvelteuiGradient {
    from: string;
    to: string;
    deg?: number;
}
/**
 * Provides shared theme styles for components that use theme.colors property on the store:
 * Button, ActionIcon, Badge, ThemeIcon, etc.
 */
export declare function getSharedColorScheme({ color, theme, variant, gradient }: GetSharedColorScheme): {
    border: string;
    background: string;
    color: string;
    hover: string;
};
export {};

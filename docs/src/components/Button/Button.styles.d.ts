import type { SvelteuiColor, SvelteuiSize, SvelteuiNumberSize, SvelteuiThemeBase } from '../_styles';
export declare type ButtonVariant = 'filled' | 'light' | 'outline' | 'default' | 'white' | 'gradient' | 'subtle';
export interface ButtonStylesProps {
    color: SvelteuiColor;
    size: SvelteuiSize;
    radius: SvelteuiNumberSize;
    fullWidth: boolean;
    compact: boolean;
    gradientFrom: string;
    gradientTo: string;
    gradientDeg: number;
}
export interface GetVariantStyles {
    theme: SvelteuiThemeBase;
    color: SvelteuiColor;
    variant: ButtonVariant;
    gradient?: {
        from: SvelteuiColor;
        to: SvelteuiColor;
        deg: number;
    };
}
export declare const sizes: {
    xs: {
        height: number;
        padding: string;
    };
    sm: {
        height: number;
        padding: string;
    };
    md: {
        height: number;
        padding: string;
    };
    lg: {
        height: number;
        padding: string;
    };
    xl: {
        height: number;
        padding: string;
    };
    'compact-xs': {
        height: number;
        padding: string;
    };
    'compact-sm': {
        height: number;
        padding: string;
    };
    'compact-md': {
        height: number;
        padding: string;
    };
    'compact-lg': {
        height: number;
        padding: string;
    };
    'compact-xl': {
        height: number;
        padding: string;
    };
};
export declare function getSharedColorScheme({ color, theme, variant, gradient }: GetVariantStyles): {
    border: string;
    background: string;
    color: string;
    hover: string;
};

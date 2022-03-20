declare const ThemeTokens: import("@stitches/core/types/stitches").default<"", {
    sm: "(min-width: 640px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 1024px)";
    xl: "(min-width: 1280px)";
    xxl: "(min-width: 1536px)";
}, {}, import("@stitches/core/types/config").DefaultThemeMap, {
    size: (value: any) => {
        width: any;
        height: any;
    };
}>;
export default ThemeTokens;

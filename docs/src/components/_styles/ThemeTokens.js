import { createStitches } from '@stitches/core';
const ThemeTokens = createStitches({
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
        xxl: '(min-width: 1536px)'
    },
    utils: {
        size: (value) => ({
            width: value,
            height: value
        })
    }
});
export default ThemeTokens;

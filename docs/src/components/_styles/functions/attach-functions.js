import { fns } from './fns';
export function attachFunctions(themeBase) {
    return {
        ...themeBase,
        fn: {
            themeColor: fns.themeColor(themeBase),
            rgba: fns.rgba
        }
    };
}

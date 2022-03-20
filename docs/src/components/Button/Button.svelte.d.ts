import { SvelteComponentTyped } from "svelte";
import type { ButtonVariant } from './Button.styles';
import type { Override, SvelteuiColor, SvelteuiNumberSize } from '../_styles';
declare const __propDef: {
    props: {
        [x: string]: any;
        override?: Override['props'];
        variant?: ButtonVariant;
        color?: SvelteuiColor;
        size?: SvelteuiNumberSize;
        radius?: SvelteuiNumberSize | number;
        type?: 'button' | 'reset' | 'submit' | 'menu';
        loaderPosition?: 'left' | 'right';
        gradientFrom?: SvelteuiColor;
        gradientTo?: SvelteuiColor;
        gradientDeg?: number;
        class?: string;
        href?: string;
        external?: boolean;
        disabled?: boolean;
        compact?: boolean;
        loading?: boolean;
        uppercase?: boolean;
        fullSize?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        leftIcon: {};
        default: {};
        rightIcon: {};
    };
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
/**
 * A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.
 *
 * @see https://svelteui-docs.vercel.app/core/button
 * @example
 * ```tsx
 * <Button>Click</Button> // standard button
 * ```
 */
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};

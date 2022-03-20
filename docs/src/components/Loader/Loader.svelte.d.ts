import { SvelteComponentTyped } from "svelte";
import type { LoaderPropsExtended } from './Loader.styles';
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: LoaderPropsExtended['size'] | number;
        color?: LoaderPropsExtended['color'];
        variant?: LoaderPropsExtended['variant'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LoaderProps = typeof __propDef.props;
export declare type LoaderEvents = typeof __propDef.events;
export declare type LoaderSlots = typeof __propDef.slots;
/**
 * The Loader component creates a loading icon. There are three different Loaders with the circle as the default.
 *
 * @see https://svelteui-docs.vercel.app/core/loader
 * @example
 * ```tsx
 * <Loader color='green' size='lg' variant='bars' />
 * ```
 */
export default class Loader extends SvelteComponentTyped<LoaderProps, LoaderEvents, LoaderSlots> {
}
export {};

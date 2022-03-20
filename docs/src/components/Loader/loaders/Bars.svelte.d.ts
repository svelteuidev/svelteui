import { SvelteComponentTyped } from "svelte";
import type { LoaderPropsExtended } from './loader-props-extended';
declare const __propDef: {
    props: {
        size?: LoaderPropsExtended['size'];
        color?: LoaderPropsExtended['color'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BarsProps = typeof __propDef.props;
export declare type BarsEvents = typeof __propDef.events;
export declare type BarsSlots = typeof __propDef.slots;
export default class Bars extends SvelteComponentTyped<BarsProps, BarsEvents, BarsSlots> {
}
export {};

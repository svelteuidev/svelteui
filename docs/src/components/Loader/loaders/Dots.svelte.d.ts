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
export declare type DotsProps = typeof __propDef.props;
export declare type DotsEvents = typeof __propDef.events;
export declare type DotsSlots = typeof __propDef.slots;
export default class Dots extends SvelteComponentTyped<DotsProps, DotsEvents, DotsSlots> {
}
export {};

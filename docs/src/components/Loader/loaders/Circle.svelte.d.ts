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
export declare type CircleProps = typeof __propDef.props;
export declare type CircleEvents = typeof __propDef.events;
export declare type CircleSlots = typeof __propDef.slots;
export default class Circle extends SvelteComponentTyped<CircleProps, CircleEvents, CircleSlots> {
}
export {};

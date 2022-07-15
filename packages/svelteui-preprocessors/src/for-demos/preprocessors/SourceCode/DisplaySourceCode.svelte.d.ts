import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        sourceId: string;
        source?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            source: string;
        };
    };
};
export declare type DisplaySourceCodeProps = typeof __propDef.props;
export declare type DisplaySourceCodeEvents = typeof __propDef.events;
export declare type DisplaySourceCodeSlots = typeof __propDef.slots;
export default class DisplaySourceCode extends SvelteComponentTyped<DisplaySourceCodeProps, DisplaySourceCodeEvents, DisplaySourceCodeSlots> {
}
export {};

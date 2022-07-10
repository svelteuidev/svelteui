import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        sourceId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SourceCodeProps = typeof __propDef.props;
export declare type SourceCodeEvents = typeof __propDef.events;
export declare type SourceCodeSlots = typeof __propDef.slots;
export default class SourceCode extends SvelteComponentTyped<SourceCodeProps, SourceCodeEvents, SourceCodeSlots> {
}
export {};

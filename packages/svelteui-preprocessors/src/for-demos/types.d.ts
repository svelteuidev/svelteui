import type { Ast } from 'svelte/types/compiler/interfaces';
interface Node {
    start: number;
    end: number;
    type: string;
    name: string;
    raw?: string;
    data?: string;
    attributes?: Array<Record<string, any>>;
    children?: any;
}
export type { Node, Ast };

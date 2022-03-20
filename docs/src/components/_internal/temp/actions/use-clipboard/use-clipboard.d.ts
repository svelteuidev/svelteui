export declare type Action = (node: HTMLElement, parameters?: any) => {
    update?: (parameters: any) => void;
    destroy?: () => void;
};
export declare function clipboard(node: HTMLElement, text: string): ReturnType<Action>;

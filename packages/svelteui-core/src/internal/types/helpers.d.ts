export type Func = (...args: any[]) => any;
export type FunctionNoArgs = () => void;
export type FunctionType<T, R> = (args: T) => R;

type ComponentPropName = string;

interface ComponentProp {
	name: string;
	kind: 'let' | 'const' | 'function';
	constant: boolean;
	type?: string;
	value?: any;
	description?: string;
	isFunction: boolean;
	isFunctionDeclaration: boolean;
	reactive: boolean;
}

const DEFAULT_SLOT_NAME = '__default__';

type ComponentSlotName = typeof DEFAULT_SLOT_NAME | string;

interface ComponentSlot {
	name?: string;
	default: boolean;
	fallback?: string;
	slot_props?: string;
}

interface SlotPropValue {
	value?: string;
	replace: boolean;
}

type SlotProps = Record<string, SlotPropValue>;

type ComponentEventName = string;

interface ForwardedEvent {
	type: 'forwarded';
	name: string;
	element: ComponentInlineElement | ComponentElement;
}

interface DispatchedEvent {
	type: 'dispatched';
	name: string;
	detail?: any;
}

type ComponentEvent = ForwardedEvent | DispatchedEvent;

type TypeDefName = string;

interface TypeDef extends Pick<commentParser.Tag, 'type' | 'name'> {
	description?: string;
	ts: string;
}

interface ComponentInlineElement {
	type: 'InlineComponent';
	name: string;
}

interface ComponentElement {
	type: 'Element';
	name: string;
}

type RestProps = undefined | ComponentInlineElement | ComponentElement;

interface Extends {
	interface: string;
	import: string;
}

interface ComponentPropBindings {
	elements: string[];
}

export interface ParsedComponent {
	props: ComponentProp[];
	slots: ComponentSlot[];
	events: ComponentEvent[];
	typedefs: TypeDef[];
	rest_props: RestProps;
	extends?: Extends;
	componentComment?: string;
}

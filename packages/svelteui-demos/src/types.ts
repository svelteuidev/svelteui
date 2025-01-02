import type { Component, SvelteUIColor, SvelteUISize } from '@svelteuidev/core';

/* eslint-disable  @typescript-eslint/no-explicit-any */

interface ControlCondition {
	control: string;
	comparator: '===' | '!==';
	value: any;
}

interface DemoControlBase<Type, T = any> {
	type: Type;
	name: string;
	label?: string;
	initialValue?: T;
	defaultValue?: T;
	when?: ControlCondition;
}

export interface DemoControlBoolean extends DemoControlBase<'boolean', boolean> {}

export interface DemoControlColor extends DemoControlBase<'color', SvelteUIColor> {}

export interface DemoControlSelect extends DemoControlBase<'select', string> {
	data: { label: string; value: string }[];
	capitalize?: boolean;
}

export interface DemoControlString extends DemoControlBase<'string', string> {}

export interface DemoControlSize extends DemoControlBase<'size', SvelteUISize> {}

export interface DemoControlNumber extends DemoControlBase<'number', number> {
	min?: number;
	max?: number;
	step?: number;
}

export interface DemoControlSegmented extends DemoControlBase<'segmented', string> {
	data: { label: string; value: string }[];
	capitalize?: boolean;
}

export interface DemoControlComposite
	extends Exclude<
		DemoControlBase<'composite', Record<string, any>>,
		'initialValue' | 'defaultValue'
	> {
	controls: DemoControl[];
}

export type DemoControl =
	| DemoControlBoolean
	| DemoControlColor
	| DemoControlSelect
	| DemoControlString
	| DemoControlSize
	| DemoControlNumber
	| DemoControlSegmented
	| DemoControlComposite;

// _DO_NOT_USE_ needed for giving TS know that type is actually determine DemoControl object shape
// export type ConfiguratorDemoControl = { type: '_DO_NOT_USE_' } | DemoControl;

export type CodeTemplateFunction = (props: string, children?: string) => string;

export interface CodeTemplateOptions {
	component: string;
	from: string;
}

interface DemoBaseConfiguration {
	previewMaxWidth?: number;
	previewBackground?: { light: string; dark: string };
}

export interface CodeDemoConfiguration extends DemoBaseConfiguration {
	code?: string;
	spacing?: boolean;
	canShowCode?: boolean;
}

export interface ConfiguratorDemoConfiguration extends DemoBaseConfiguration {
	configurator: DemoControl[];
	codeTemplate?: CodeTemplateFunction | CodeTemplateOptions;
	multiline?: boolean | number;
	multilineEndNewLine?: boolean;
	center?: boolean;
	hideCode?: boolean;
}

export interface CodeDemoType {
	default: Component;
	type: 'demo';
	configuration: CodeDemoConfiguration;
}

export interface ConfiguratorDemoType {
	default: Component;
	type: 'configurator';
	configuration: ConfiguratorDemoConfiguration;
}

export type DemoType = CodeDemoType | ConfiguratorDemoType;

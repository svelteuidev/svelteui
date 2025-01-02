import type { SvelteComponent } from 'svelte';
import type { SvelteUIColor, SvelteUISize } from '@svelteuidev/core';

/* eslint-disable  @typescript-eslint/no-explicit-any */

interface ControlCondition {
	control: string;
	comparator: '===' | '!==';
	value: any;
}

interface DemoControlBase<T = any> {
	name: string;
	label?: string;
	initialValue?: T;
	defaultValue?: T;
	when?: ControlCondition;
}

export interface DemoControlBoolean extends DemoControlBase<boolean> {
	type: 'boolean';
}

export interface DemoControlColor extends DemoControlBase<SvelteUIColor> {
	type: 'color';
}

export interface DemoControlSelect extends DemoControlBase<string> {
	type: 'select';
	data: { label: string; value: string }[];
	capitalize?: boolean;
}

export interface DemoControlString extends DemoControlBase<string> {
	type: 'string';
}

export interface DemoControlSize extends DemoControlBase<SvelteUISize> {
	type: 'size';
}

export interface DemoControlNumber extends DemoControlBase<number> {
	type: 'number';
	min?: number;
	max?: number;
	step?: number;
}

export interface DemoControlSegmented extends DemoControlBase<string> {
	type: 'segmented';
	data: { label: string; value: string }[];
	capitalize?: boolean;
}

export interface DemoControlComposite
	extends Exclude<DemoControlBase<Record<string, any>>, 'initialValue' | 'defaultValue'> {
	type: 'composite';
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
export type ConfiguratorDemoControl = { type: '_DO_NOT_USE_' } | DemoControl;

interface DemoBaseConfiguration {
	previewMaxWidth?: number;
	previewBackground?: { light: string; dark: string };
}

export interface CodeDemoConfiguration extends DemoBaseConfiguration {
	code?: string;
	spacing?: boolean;
	codeVisible?: boolean;
}

export type CodeTemplateFunction = (props: string, children?: string) => string;

export interface CodeTemplateOptions {
	component: string;
	from: string;
}

export interface ConfiguratorDemoConfiguration extends DemoBaseConfiguration {
	configurator: ConfiguratorDemoControl[];
	codeTemplate?: CodeTemplateFunction | CodeTemplateOptions;
	multiline?: boolean | number;
	multilineEndNewLine?: boolean;
	center?: boolean;
	hideCode?: boolean;
}

export interface CodeDemoType {
	default: typeof SvelteComponent<any>;
	type: 'demo';
	configuration: CodeDemoConfiguration;
}

export interface ConfiguratorDemoType {
	default: typeof SvelteComponent<any>;
	type: 'configurator';
	configuration: ConfiguratorDemoConfiguration;
	previewMaxWidth?: number;
	previewBackground?: { light: string; dark: string };
}

export type DemoType = CodeDemoType | ConfiguratorDemoType;

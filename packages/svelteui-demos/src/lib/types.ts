import type { SvelteComponent } from 'svelte';

type DemoControlType = 'boolean' | 'color' | 'select' | 'string' | 'size' | 'number' | 'segmented';

export interface DemoControlProps {
	type: DemoControlType;
	name: string;
	label?: string;
	initialValue?: any;
	defaultValue?: any;
	capitalize?: boolean;
	data?: { label: string; value: string }[];
	min?: number;
	max?: number;
	step?: number;
}

interface DemoBaseConfiguration {
	wrapper?: typeof SvelteComponent;
	background?: (colorScheme: 'light' | 'dark') => string;
}

export interface CodeDemoConfiguration extends DemoBaseConfiguration {
	code?: string;
	spacing?: boolean;
	toggle?: boolean;
	inline?: boolean;
}

export interface ConfiguratorDemoConfiguration extends DemoBaseConfiguration {
	codeTemplate(props: string, children?: string): string;
	configurator: DemoControlProps[];
	multiline?: boolean | number;
	includeCode?: boolean;
	center?: boolean;
}

export interface CodeDemoType {
	default: typeof SvelteComponent;
	type: 'demo';
	configuration: CodeDemoConfiguration;
}

export interface ConfiguratorDemoType {
	default: typeof SvelteComponent;
	type: 'configurator';
	configuration: ConfiguratorDemoConfiguration;
}

export type DemoType = CodeDemoType | ConfiguratorDemoType;

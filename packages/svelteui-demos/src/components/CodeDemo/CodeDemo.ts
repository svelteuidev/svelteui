import type { CodeDemoConfiguration } from '$lib/types';
import type { Component } from '@svelteuidev/core';

export interface CodeDemoProps extends CodeDemoConfiguration {
	component: Component;
}

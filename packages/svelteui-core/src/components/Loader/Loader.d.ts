import { SvelteComponentTyped } from 'svelte';
import { SVGAttributes } from 'svelte/elements';
import { Component } from '$lib/internal/types';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, LoaderType } from '$lib/styles';

export interface LoaderProps extends DefaultProps<Omit<Component, 'prototype'>>, SVGAttributes {
	size?: SvelteUINumberSize;
	color?: SvelteUIColor | 'white';
	variant?: LoaderType;
}

export default class Loader extends SvelteComponentTyped<
	LoaderProps,
	Record<string, never>,
	Record<string, never>
> {}

import { SvelteComponentTyped } from 'svelte';
import { HTMLButtonAttributes, SVGAttributes } from 'svelte/elements';
import type { Component, LiteralUnion } from '$lib/internal/types';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, LoaderType } from '$lib/styles';

export interface LoaderPropsExtended extends Partial<SVGElement> {
	/** Defines width of loader */
	size?: SvelteUINumberSize;

	/** Loader color from theme */
	color?: SvelteUIColor | 'white';

	/** Loader appearance */
	variant?: LoaderType;
}

export interface LoaderProps extends DefaultProps<Omit<Component, 'prototype'>> {
	variant: LoaderPropsExtended['variant'];
	color: LoaderPropsExtended['color'];
	size: LoaderPropsExtended['size'];
}

export interface LoaderEvents {}

export interface LoaderSlots {}

export default class Loader extends SvelteComponentTyped<LoaderProps, LoaderEvents, LoaderSlots> {}

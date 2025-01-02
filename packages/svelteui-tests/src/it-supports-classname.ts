import type { Component } from 'svelte';
import { expect, it } from 'vitest';
import { render } from '@testing-library/svelte';

export function itSupportsClassName<P>(Component: Component, props?: P, isChild: boolean = false) {
	it('supports className prop', () => {
		const { container } = render(Component, {
			target: document.body,
			props: {
				...props,
				class: 'class-name-test'
			}
		});

		let element = container.firstElementChild;
		if (isChild) element = element.firstElementChild;

		const classes = element.className.split(' ');
		expect(classes).toContain('class-name-test');
	});
}

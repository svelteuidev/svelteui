import type { Component } from 'svelte';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

export function itSupportsClassName<P>(Component: Component, props?: P, isChild: boolean = false) {
	it('supports className prop', () => {
		render(Component, {
			target: document.body,
			props: {
				...props,
				class: 'class-name-test',
				'data-testid': 'test'
			}
		});

		let element = screen.getByTestId('test') as Element;
		if (isChild) element = element.firstElementChild;

		const classes = element.className.split(' ');
		expect(classes).toContain('class-name-test');
	});
}

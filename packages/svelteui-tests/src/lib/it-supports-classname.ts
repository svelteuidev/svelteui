import { expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import type { SvelteComponent } from 'svelte';

export function itSupportsClassName<P>(
	Component: typeof SvelteComponent,
	props?: P,
	isChild: boolean = false
) {
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

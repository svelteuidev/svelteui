import { tick } from 'svelte';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/svelte';

import UseCssVariable from './actions/use-css-variable.svelte';

describe('use-css-variable', () => {
	test('applies CSS properties to a HTML element', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);
		const { component } = render(UseCssVariable, { target: container });
		expect(component).toBeTruthy();

		const div = document.getElementById('css-variable');
		expect(div.style.getPropertyValue('--display')).eq('block');
		expect(div.style.getPropertyValue('--background-color')).eq('yellow');

		component.$set({ cssVariables: { 'background-color': 'green', color: 'purple' } });
		await tick();

		expect(div.style.getPropertyValue('--display')).eq('');
		expect(div.style.getPropertyValue('--color')).eq('purple');
		expect(div.style.getPropertyValue('--background-color')).eq('green');
	});
});

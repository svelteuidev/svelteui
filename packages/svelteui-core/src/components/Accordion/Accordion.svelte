<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Box } from '../Box';
	import { key } from './key';
	import Chevron from './Chevron/Chevron.svelte';
	import useStyles from './Accordion.styles';
	import type { AccordionContext, AccordionProps as $$AccordionProps } from './Accordion';

	interface $$Props extends $$AccordionProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		variant: $$Props['variant'] = 'default',
		value: $$Props['value'] = undefined,
		defaultValue: $$Props['defaultValue'] = undefined,
		radius: $$Props['radius'] = 'sm',
		order: $$Props['order'] = undefined,
		multiple: $$Props['multiple'] = false,
		// loop: $$Props['loop'] = false,
		// id: $$Props['id'] = randomID(),
		chevron: $$Props['chevron'] = Chevron,
		chevronPosition: $$Props['chevronPosition'] = 'right',
		chevronSize: $$Props['chevronSize'] = 24,
		disableChevronRotation: $$Props['disableChevronRotation'] = false,
		transitionDuration: $$Props['transitionDuration'] = 200;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	let stateContent = {
		currentValue: value || defaultValue,
		variant,
		order,
		radius,
		chevron,
		chevronPosition,
		chevronSize,
		disableChevronRotation,
		transitionDuration,
		updateActive,
		isItemActive
	};
	const state = writable(stateContent);

	// allows for reactivity to prop changes
	$: {
		stateContent = {
			currentValue: value || defaultValue,
			variant,
			order,
			radius,
			chevron,
			chevronPosition,
			chevronSize,
			disableChevronRotation,
			transitionDuration,
			updateActive,
			isItemActive
		};
		state.set(stateContent);
	}

	function updateActive(activeValue: string) {
		if (!multiple) {
			state.set({ ...$state, currentValue: activeValue });
			return;
		}

		let v = $state.currentValue;
		if (v.includes(activeValue)) {
			v = (v as string[]).filter((v) => v !== activeValue);
		} else {
			(v as string[]).push(activeValue);
			state.set({ ...$state, currentValue: v });
		}
	}

	function isItemActive(itemValue: string) {
		return multiple ? $state.currentValue.includes(itemValue) : $state.currentValue === itemValue;
	}

	setContext(key, state as AccordionContext);

	$: ({ cx, classes, getStyles } = useStyles({ radius, variant }, { name: 'Accordion' }));
</script>

<!--
@component

Icon button to indicate secondary action.

@see https://svelteui.org/core/accordion
@example
    ```svelte
    //TODO
    ```
-->

<Box
	class={cx(className, classes.root, getStyles({ css: override }))}
	bind:element
	{use}
	{...$$restProps}
>
	<slot />
</Box>

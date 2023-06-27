<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { randomID } from '$lib/styles';
	import { Box } from '../Box';
	import { key } from './key';
	import Chevron from './Chevron/Chevron.svelte';
	import useStyles from './Accordion.styles';
	import type {
		AccordionContext,
		AccordionProps as $$AccordionProps,
		AccordionEvents as $$AccordionEvents
	} from './Accordion';

	interface $$Props extends $$AccordionProps {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$AccordionEvents {}

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

	const dispatch = createEventDispatcher();

	let _value: string | string[] = value || defaultValue;
	let stateContent = {
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

	// converts internal value into correct type
	$: {
		if (multiple && !Array.isArray(_value)) {
			_value = _value ? [_value] : [];
		}
	}

	// allows for reactivity to prop changes
	$: {
		stateContent = {
			currentValue: _value,
			variant,
			order,
			radius,
			chevron,
			chevronPosition,
			chevronSize,
			disableChevronRotation,
			transitionDuration,
			updateActive,
			isItemActive,
			getControlsId,
			getRegionId
		} as AccordionContext;
		state.set(stateContent);
	}

	function updateActive(itemValue: string) {
		if (!multiple) {
			_value = _value === itemValue ? undefined : itemValue;
			dispatch('change', _value);
			return;
		}

		let values = (_value || []) as string[];
		if (values.includes(itemValue)) {
			values = values.filter((v) => v !== itemValue);
		} else {
			values.push(itemValue);
		}
		_value = values;
		dispatch('change', _value);
	}

	function isItemActive(itemValue: string) {
		return multiple ? _value.includes(itemValue) : _value === itemValue;
	}

	function getControlsId(itemValue: string) {
		return `${randomID()}-${itemValue}-panel`;
	}

	function getRegionId(itemValue: string) {
		return `${randomID()}-${itemValue}-region`;
	}

	setContext(key, state);

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

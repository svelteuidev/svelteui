<script lang="ts" generics="Multiple extends boolean = false">
	// Temporary eslint disable while svelte-eslint-parser does not support generics in file -->
	/* eslint-disable no-undef */
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
		AccordionEvents as $$AccordionEvents,
		AccordionValue
	} from './Accordion';

	interface $$Props extends $$AccordionProps<Multiple> {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$AccordionEvents<Multiple> {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		variant: $$Props['variant'] = 'default',
		value: $$Props['value'] = undefined,
		defaultValue: $$Props['defaultValue'] = undefined,
		radius: $$Props['radius'] = 'sm',
		order: $$Props['order'] = undefined,
		multiple: $$Props['multiple'] = false as Multiple,
		id: $$Props['id'] = randomID(),
		chevron: $$Props['chevron'] = Chevron,
		chevronPosition: $$Props['chevronPosition'] = 'right',
		chevronSize: $$Props['chevronSize'] = 24,
		disableChevronRotation: $$Props['disableChevronRotation'] = false,
		transitionDuration: $$Props['transitionDuration'] = 200;
	export { className as class };

	const dispatch = createEventDispatcher();

	let _value: AccordionValue<Multiple>;
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
	$: _value = value || defaultValue;
	$: {
		if (multiple && !Array.isArray(_value)) {
			_value = (_value ? [_value] : []) as AccordionValue<Multiple>;
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
			_value = (_value === itemValue ? undefined : itemValue) as AccordionValue<Multiple>;
			dispatch('change', _value);
			return;
		}

		let values = (_value || []) as string[];
		if (values.includes(itemValue)) {
			values = values.filter((v) => v !== itemValue);
		} else {
			values.push(itemValue);
		}
		_value = values as AccordionValue<Multiple>;
		dispatch('change', _value);
	}

	function isItemActive(itemValue: string) {
		return multiple ? _value.includes(itemValue) : _value === itemValue;
	}

	function getControlsId(itemValue: string) {
		return `${id}-${itemValue}-panel`;
	}

	function getRegionId(itemValue: string) {
		return `${id}-${itemValue}-region`;
	}

	setContext(key, state);

	$: ({ cx, classes, getStyles } = useStyles({ radius, variant }, { name: 'Accordion' }));
</script>

<!--
@component

Accordion component that allows the collapsing of each item.

@see https://svelteui.dev/core/accordion
@example
    ```svelte
    <Accordion defaultValue="typescript">
      <Accordion.Item value="typescript">
        <div slot="control">Typescript Based</div>
        Content of the accordion item
      </Accordion.Item>
      <Accordion.Item value="packed" disabled>
        <div slot="control">Feature packed</div>
        ...
      </Accordion.Item>
      <Accordion.Item value="accessible">
        <div slot="control">Accessible and usable</div>
        ...
      </Accordion.Item>
    </Accordion>
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

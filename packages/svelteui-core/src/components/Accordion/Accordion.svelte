<script lang="ts" generics="Multiple extends boolean = false">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { randomID } from '$lib/styles';
	import { Box } from '../Box';
	import { key } from './key';
	import Chevron from './Chevron/Chevron.svelte';
	import useStyles from './Accordion.styles';
	import type { AccordionContext, AccordionProps, AccordionValue } from './Accordion';
	import { useEffect } from 'react';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		variant = 'default',
		value = $bindable(undefined),
		defaultValue = undefined,
		radius = 'sm',
		order = undefined,
		multiple = false as Multiple,
		id = randomID(),
		chevron = undefined,
		chevronPosition = 'right',
		chevronSize = 24,
		disableChevronRotation = false,
		transitionDuration = 200,
		onchange = () => {},
		children,
		...rest
	}: AccordionProps<Multiple> = $props();

	let _value: AccordionValue<Multiple>;
	let context = $derived({
		currentValue: value,
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
	});

	// @TODO: is this reactive?
	setContext(key, () => context);

	function updateActive(itemValue: string) {
		if (!multiple) {
			_value = (_value === itemValue ? undefined : itemValue) as AccordionValue<Multiple>;

			onchange(_value);
			return;
		}

		let values = (_value || []) as string[];
		if (values.includes(itemValue)) {
			values = values.filter((v) => v !== itemValue);
		} else {
			values.push(itemValue);
		}
		_value = values as AccordionValue<Multiple>;
		onchange(_value);
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

	let { cx, classes, getStyles } = $derived(useStyles({ radius, variant }, { name: 'Accordion' }));
</script>

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))} {use} {...rest}>
	{@render children()}
</Box>

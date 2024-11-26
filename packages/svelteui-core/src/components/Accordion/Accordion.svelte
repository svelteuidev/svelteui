<!-- @migration-task Error while migrating Svelte code: can't migrate `let _value: AccordionValue<Multiple>;` to `$state` because there's a variable named state.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" generics="Multiple extends boolean = false">
	// Temporary eslint disable while svelte-eslint-parser does not support generics in file -->
	/* eslint-disable no-undef */
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { randomID } from '$lib/styles';
	import { Box } from '../Box';
	import { key } from './key';
	import Chevron from './Chevron/Chevron.svelte';
	import useStyles from './Accordion.styles';
	import type { AccordionContext, AccordionProps, AccordionValue } from './Accordion';

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
		chevron = Chevron, // @TODO: this should be a snippet?
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
	{@render children(context)}
</Box>

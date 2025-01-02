<script lang="ts" generics="Multiple extends boolean = false">
	// Note: Limitation of the svelte eslint plugin
	/* eslint-disable no-undef */
	import { setContext } from 'svelte';
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
		chevronComponent = Chevron,
		chevronPosition = 'right',
		chevronSize = 24,
		disableChevronRotation = false,
		transitionDuration = 200,
		onchange = () => {},
		chevron,
		children,
		...rest
	}: AccordionProps<Multiple> = $props();

	let context: AccordionContext<Multiple> = $derived({
		currentValue: value || defaultValue,
		variant,
		order,
		radius,
		chevronComponent,
		chevronPosition,
		chevronSize,
		disableChevronRotation,
		transitionDuration,
		updateActive,
		isItemActive,
		getControlsId,
		getRegionId,
		chevron
	});
	setContext(key, () => context);

	function updateActive(itemValue: string) {
		if (!multiple) {
			value = (value === itemValue ? undefined : itemValue) as AccordionValue<Multiple>;

			onchange(value);
			return;
		}

		let values = (value || []) as string[];
		if (values.includes(itemValue)) {
			values = values.filter((v) => v !== itemValue);
		} else {
			values.push(itemValue);
		}
		value = values as AccordionValue<Multiple>;
		onchange(value);
	}

	function isItemActive(itemValue: string) {
		return multiple ? value?.includes(itemValue) : value === itemValue;
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

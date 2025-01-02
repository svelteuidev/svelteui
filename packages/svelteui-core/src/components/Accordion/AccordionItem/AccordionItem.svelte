<script lang="ts">
	import { getContext } from 'svelte';

	import { Box } from '../../Box';
	import { UnstyledButton } from '../../Button';
	import { Collapse } from '../../Collapse';

	import type { AccordionContext } from '../Accordion';
	import Chevron from '../Chevron/Chevron.svelte';
	import { key } from '../key';
	import useStyles from './AccordionItem.styles';
	import type { AccordionItemProps } from './AccordionItem';
	import { IconRenderer } from '$lib/components/IconRenderer';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		value = $bindable(undefined),
		disabled = false,
		chevronComponent = undefined,
		chevron = undefined,
		control,
		children,
		...rest
	}: AccordionItemProps = $props();

	const {
		variant,
		radius,
		chevronComponent: contextChevronComponent = chevronComponent,
		chevronPosition,
		chevronSize,
		disableChevronRotation,
		transitionDuration,
		updateActive,
		isItemActive,
		getControlsId,
		getRegionId,
		chevron: contextChevron = chevron
	}: AccordionContext = $derived.by(getContext(key));

	function onClick() {
		updateActive(value);
	}

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				radius: radius,
				transitionDuration: transitionDuration,
				chevronPosition: chevronPosition,
				chevronSize: chevronSize
			},
			{ name: 'AccordionItem' }
		)
	);
</script>

<Box
	class={cx(className, classes.root, getStyles({ css: override, variation: variant }), {
		[classes.active]: isItemActive(value)
	})}
	data-active={isItemActive(value)}
	{use}
	{...rest}
>
	<UnstyledButton
		class={classes.control}
		bind:element
		{disabled}
		id={getRegionId(value)}
		aria-expanded={isItemActive(value)}
		aria-controls={getControlsId(value)}
		onclick={onClick}
	>
		<span class={classes.chevron} data-rotate={!disableChevronRotation && isItemActive(value)}>
			{#if contextChevron}
				{@render contextChevron()}
			{:else if contextChevronComponent}
				<IconRenderer icon={contextChevronComponent} />
			{:else}
				<Chevron />
			{/if}
		</span>
		<span class={classes.controlContent}>
			{@render control(disabled)}
		</span>
	</UnstyledButton>
	<Collapse
		role="region"
		id={getControlsId(value)}
		aria-labelledby={getRegionId(value)}
		open={isItemActive(value)}
		{transitionDuration}
	>
		<div class={classes.panel}>
			{@render children()}
		</div>
	</Collapse>
</Box>

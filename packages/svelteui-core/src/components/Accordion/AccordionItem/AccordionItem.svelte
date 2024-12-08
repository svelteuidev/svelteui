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

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		value = $bindable(undefined),
		disabled = false,
		chevron = undefined,
		control,
		children,
		...rest
	}: AccordionItemProps = $props();

	const ctx: AccordionContext = getContext(key);

	function onClick() {
		ctx.updateActive(value);
	}

	let { cx, classes, getStyles } = $derived(useStyles(
		{
			radius: ctx.radius,
			transitionDuration: ctx.transitionDuration,
			chevronPosition: ctx.chevronPosition,
			chevronSize: ctx.chevronSize
		},
		{ name: 'AccordionItem' }
	));
</script>

<Box
	class={cx(className, classes.root, getStyles({ css: override, variation: ctx.variant }), {
		[classes.active]: ctx.isItemActive(value)
	})}
	data-active={ctx.isItemActive(value)}
	{use}
	{...rest}
>
	<UnstyledButton
		class={classes.control}
		bind:element
		{disabled}
		id={ctx.getRegionId(value)}
		aria-expanded={ctx.isItemActive(value)}
		aria-controls={ctx.getControlsId(value)}
		onclick={onClick}
	>
		<span
			class={classes.chevron}
			data-rotate={!ctx.disableChevronRotation && ctx.isItemActive(value)}
		>
		{#if ctx.chevron}
			{@render ctx.chevron()}
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
		id={ctx.getControlsId(value)}
		aria-labelledby={ctx.getRegionId(value)}
		open={ctx.isItemActive(value)}
		transitionDuration={ctx.transitionDuration}
	>
		<div class={classes.panel}>
			{@render children()}
		</div>
	</Collapse>
</Box>

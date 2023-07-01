<script lang="ts">
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/internal';
	import { Box } from '../../Box';
	import { UnstyledButton } from '../../Button';
	import { Collapse } from '../../Collapse';
	import { IconRenderer } from '../../IconRenderer';
	import type { AccordionContext } from '../Accordion';
	import { key } from '../key';
	import useStyles from './AccordionItem.styles';
	import type { AccordionItemProps as $$AccordionItemProps } from './AccordionItem';

	interface $$Props extends $$AccordionItemProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		value: $$Props['value'] = undefined,
		chevron: $$Props['chevron'] = undefined,
		disabled: $$Props['disabled'] = false,
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = undefined,
		iconProps: $$Props['iconProps'] = undefined;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	const ctx: AccordionContext = getContext(key);

	function onClick() {
		$ctx.updateActive(value);
	}

	$: ({ cx, classes, getStyles } = useStyles(
		{
			radius: $ctx.radius,
			transitionDuration: $ctx.transitionDuration,
			chevronPosition: $ctx.chevronPosition,
			chevronSize: $ctx.chevronSize
		},
		{ name: 'AccordionItem' }
	));
</script>

<!--
@component

Item of an accordion.

@see https://svelteui.org/core/accordion
@example
    ```svelte
    <Accordion.Item value="typescript">
      <div slot="control">Typescript Based</div>
      Content of the accordion item
    </Accordion.Item>
    ```
-->

<Box
	class={cx(className, classes.root, getStyles({ css: override, variation: $ctx.variant }), {
		[classes.active]: $ctx.isItemActive(value)
	})}
	{use}
	{...$$restProps}
>
	<UnstyledButton
		class={classes.control}
		bind:element
		{disabled}
		id={$ctx.getRegionId(value)}
		aria-expanded={$ctx.isItemActive(value)}
		aria-controls={$ctx.getControlsId(value)}
		on:click={onClick}
		use={[forwardEvents]}
	>
		<span
			class={classes.chevron}
			data-rotate={!$ctx.disableChevronRotation && $ctx.isItemActive(value)}
		>
			<svelte:component this={chevron || $ctx.chevron} />
		</span>
		<span class={classes.controlContent}>
			<slot name="control" {disabled} />
		</span>
		<slot name="icon">
			{#if icon}
				<IconRenderer {icon} {iconSize} {iconProps} />
			{/if}
		</slot>
	</UnstyledButton>
	<Collapse
		role="region"
		id={$ctx.getControlsId(value)}
		aria-labelledby={$ctx.getRegionId(value)}
		open={$ctx.isItemActive(value)}
	>
		<div class={classes.panel}>
			<slot />
		</div>
	</Collapse>
</Box>

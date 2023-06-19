<script lang="ts">
  import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
  import { createEventForwarder } from '$lib/internal';
	import { Box } from '../../Box';
	import { Collapse } from '../../Collapse';
	import type { AccordionContext } from '../Accordion';
	import { key } from '../key';
	import useStyles from './AccordionItem.styles';
	import type { AccordionItemProps as $$AccordionItemProps } from './AccordionItem';

	interface $$Props extends $$AccordionItemProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		value: $$Props['value'] = undefined;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

  const ctx: AccordionContext = getContext(key);

	$: ({ cx, classes, getStyles } = useStyles(
		{ radius: ctx.radius },
		{ name: 'AccordionItem' }
	));
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

<Box class={cx(className, classes.root, getStyles({ css: override, variation: ctx.variant }), { [classes.active]: ctx.isItemActive(value) })} {use} bind:element {...$$restProps}>
  <Collapse open={ctx.isItemActive(value)}>
    <div class={classes.panel}>
      <slot />
    </div>
  </Collapse>
</Box>

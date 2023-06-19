<script lang="ts">
  import { setContext } from 'svelte';
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
		loop: $$Props['loop'] = false,
		id: $$Props['id'] = randomID(),
    chevron: $$Props['chevron'] = Chevron,
    chevronPosition: $$Props['chevronPosition'] = 'right',
    chevronSize: $$Props['chevronSize'] = 24,
    disableChevronRotation: $$Props['disableChevronRotation'] = false,
    transitionDuration: $$Props['transitionDuration'] = 200;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles(
		{ radius, variant },
		{ name: 'Accordion' }
	));

  let _value = value || defaultValue;
  $: _value = value;

  function updateActive(activeValue: string) {
    if (!multiple) {
      value = activeValue;
      return;
    }

    if (_value.includes(activeValue)) {
      _value = (_value as string[]).filter(v => v !== activeValue);
    } else {
      (_value as string[]).push(activeValue);
    }
  }

  function isItemActive(itemValue: string) {
    return multiple ? _value.includes(itemValue) : _value === itemValue;
  }

  setContext(key, {
    value: _value,
		order,
    radius,
    chevron,
    chevronPosition,
    chevronSize,
    disableChevronRotation,
    transitionDuration,
    updateActive,
    isItemActive
	} as AccordionContext);
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

<Box class={cx(className, classes.root, getStyles({ css: override }))} bind:element {use} {...$$restProps}>
  <slot />
</Box>

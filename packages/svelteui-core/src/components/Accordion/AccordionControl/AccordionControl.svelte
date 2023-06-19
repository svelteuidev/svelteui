<script lang="ts">
  import { getContext } from 'svelte';
  import { UnstyledButton } from '../../Button';
  import { IconRenderer } from '../../IconRenderer';
	import type { AccordionContext } from '../Accordion';
	import { key } from '../key';
	import useStyles from './AccordionControl.styles';
	import type { AccordionControlProps as $$AccordionControlProps } from './AccordionControl';

	interface $$Props extends $$AccordionControlProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
    chevron: $$Props['chevron'] = undefined,
    disabled: $$Props['disabled'] = false,
    icon: $$Props['icon'] = undefined,
    iconSize: $$Props['iconSize'] = undefined,
    iconProps: $$Props['iconProps'] = undefined;
	export { className as class };

  const ctx: AccordionContext = getContext(key);

  function onClick() {
    // TODO: open accordion (use accordion context)
  }

	$: ({ cx, classes, getStyles } = useStyles(
		{
      transitionDuration: ctx.transitionDuration,
      chevronPosition: ctx.chevronPosition,
      chevronSize: ctx.chevronSize
    },
		{ name: 'AccordionControl' }
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

<UnstyledButton
  class={cx(className, classes.root, getStyles({ css: override, variation: ctx.variant }))}
  bind:element
  {use}
  {disabled}
  aria-expanded={ctx.isItemActive(ctx.value)}
  aria-controls={"TODO"}
  on:click={onClick}
>
  <span class={cx(classes.chevron, { [classes.rotate]: !ctx.disableChevronRotation && ctx.isItemActive(ctx.value) })}>
    {chevron || ctx.chevron}
  </span>
  <span class={classes.content}>
    <slot {disabled} />
  </span>
  <slot name="icon">
    {#if icon}
      <IconRenderer {icon} {iconSize} {iconProps}/>
    {/if}
  </slot>
</UnstyledButton>

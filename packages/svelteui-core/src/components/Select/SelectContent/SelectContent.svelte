<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import useStyles from './SelectContent.styles';
	import type { SelectContentProps as $$SelectContentProps } from './SelectContent.styles';
  import Text from '../../Text/Text.svelte';
  import SelectItem from '../SelectItem/SelectItem.svelte';
  import type { SelectItem as Item } from '../types';

	interface $$Props extends $$SelectContentProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		data: $$Props['data'] = [],
		value: $$Props['value'] = undefined,
		hovered: $$Props['hovered'] = undefined,
		size: $$Props['size'] = 'sm',
    itemComponent: $$Props['itemComponent'] = SelectItem,
		nothingFoundLabel: $$Props['nothingFoundLabel'] = undefined;
	export { className as class };

  const dispatch = createEventDispatcher();

  function onMouseEnter(index: number) {
    dispatch('hovered', index);
  }

  function onMouseDown(item: Item) {
    if (item.disabled) return;
    dispatch('selected', item);
  }

	$: ({ cx, classes, getStyles } = useStyles({ size }));
</script>

<div class={cx(className, getStyles({ css: override }))}>
  {#if data.length === 0}
    <Text size={size} class={classes.nothingFound}>
      {nothingFoundLabel}
    </Text>
  {:else}
    {#each data as item, index (item.value)}
      <svelte:component
        this={itemComponent}
        {...item}
        class={classes.item}
        disabled={item.disabled}
        aria-selected={item.value === value}
        data-disabled={item.disabled}
        data-hovered={!item.disabled && hovered === index}
        data-selected={item.value === value}
        tabIndex={-1}
        on:mouseenter={() => onMouseEnter(index)}
        on:mousedown={() => onMouseDown(item)}
      />
    {/each}
  {/if}
</div>

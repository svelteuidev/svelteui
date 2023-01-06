<script lang="ts">
	import { randomID } from '$lib/styles';
  import { focustrap } from '@svelteuidev/composables';
	import useStyles from './Select.styles';
	import type { SelectProps as $$SelectProps } from './Select.styles';
	import InputWrapper from '../InputWrapper/InputWrapper.svelte';
	import Input from '../Input/Input.svelte';
	import Popper from '../Popper/Popper.svelte';
	import SelectContent from './SelectContent/SelectContent.svelte';
	import SelectItem from './SelectItem/SelectItem.svelte';
  import Box from '../Box/Box.svelte';
	import type { SelectItem as Item } from './types';

	interface $$Props extends $$SelectProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		data: $$Props['data'] = [],
		value: $$Props['value'] = undefined,
		defaultValue: $$Props['defaultValue'] = undefined,
		size: $$Props['size'] = 'sm',
		transition: $$Props['transition'] = 'fade',
		transitionOptions: $$Props['transitionOptions'] = { duration: 0 },
		shadow: $$Props['shadow'] = 'sm',
		itemComponent: $$Props['itemComponent'] = SelectItem,
		nothingFoundLabel: $$Props['nothingFoundLabel'] = undefined,
		zIndex: $$Props['zIndex'] = 1, // @TODO: get the default one for popovers - from theme
		dropdownPosition: $$Props['dropdownPosition'] = 'bottom',
		placeholder: $$Props['placeholder'] = undefined,
		disabled: $$Props['disabled'] = false,
		wrapperProps: $$Props['wrapperProps'] = {},
		id: $$Props['id'] = 'select';
	export { className as class };

	const uuid = randomID(id);

	let target;
	let opened = false;
  let hovered = -1;
	let _value = value ?? defaultValue;

  // @TODO: fix focustrap since it's not registering hover and click events

	function onInputFocus() {
		opened = true;
	}

	function onInputBlur() {
    // @TODO: just for testing, uncomment later
		// opened = false;
	}

  function onItemHover(e: CustomEvent<number>) {
    hovered = e.detail;
  }

  function onItemSelect(e: CustomEvent<Item>) {
    _value = e.detail.value;
  }

	$: _value = value;
	$: formattedData = data.map((item) =>
		typeof item === 'string' ? { label: item, value: item } : item
	);
	$: ({ classes } = useStyles({ size, shadow }, { override }));
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

// @TODO

@see https://svelteui.org/core/select
@example
    ```svelte
	  // @TODO
    ```
-->

<InputWrapper {...wrapperProps}>
  <div class={className}>
    <div bind:this={target}>
      <slot name="target">
        <Input
          class={classes.input}
          bind:element
          autocomplete="off"
          root="input"
          type="search"
          readOnly
          id={uuid}
          {disabled}
          {placeholder}
          on:focus={onInputFocus}
          on:blur={onInputBlur}
        />
      </slot>
    </div>
    <Popper
      reference={target}
      mounted={opened}
      position={dropdownPosition}
      {transition}
      {transitionOptions}
      {zIndex}
    >
    <Box role="listbox" on:mousedown={(e) => e.preventDefault()} use={[focustrap]}>
      <div class={classes.wrapper}>
        <SelectContent
          value={_value}
          data={formattedData}
          {itemComponent}
          {nothingFoundLabel}
          {hovered}
          on:hovered={onItemHover}
          on:selected={onItemSelect}
        />
      </div>
    </Box>
    </Popper>
  </div>
</InputWrapper>

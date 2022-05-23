<script lang="ts">
	import Input from '../Input/Input.svelte';
    import { defaultFormatter, defaultParser } from './NumberInput.styles';
	import type { NumberInputProps as $$NumberInputProps } from './NumberInput.styles';

	/** Used for forwarding actions from component */
	export let use: $$NumberInputProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$NumberInputProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$NumberInputProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$NumberInputProps['root'] = 'input';
	/** Adds icon on the left side of input */
	export let icon: $$NumberInputProps['icon'] = null;
	/** Width of icon section in px */
	export let iconWidth: $$NumberInputProps['iconWidth'] = 36;
	/** Props spread to icon component */
	export let iconProps: $$NumberInputProps['iconProps'] = { size: 20, color: 'currentColor' };
	/** Right section of input, similar to icon but on the right */
	export let rightSection: $$NumberInputProps['rightSection'] = null;
	/** Width of right section, is used to calculate input padding-right */
	export let rightSectionWidth: $$NumberInputProps['rightSectionWidth'] = 36;
	/** Props spread to rightSection div element */
	export let rightSectionProps: $$NumberInputProps['rightSectionProps'] = {};
	/** Properties spread to root element */
	export let wrapperProps: $$NumberInputProps['wrapperProps'] = {};
	/** Sets required on input element */
	export let required: $$NumberInputProps['required'] = false;
	/** Input border-radius from theme or number to set border-radius in px */
	export let radius: $$NumberInputProps['radius'] = 'sm';
	/** Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: $$NumberInputProps['variant'] = 'default';
	/** Disabled input state */
	export let disabled: $$NumberInputProps['disabled'] = false;
	/** Input size */
	export let size: $$NumberInputProps['size'] = 'sm';
	/** Sets border color to red and aria-invalid=true on input element */
    export let invalid: $$NumberInputProps['invalid'] = false;
    /** Input value */
	export let value: $$NumberInputProps['value'] = undefined;
    export let defaultValue: $$NumberInputProps['defaultValue'] = undefined;
    export let decimalSeparator: $$NumberInputProps['decimalSeparator'] = '.';
    export let min: $$NumberInputProps['min'] = 0;
    export let max: $$NumberInputProps['max'] = 10;
    export let step: $$NumberInputProps['step'] = 1;
    export let stepHoldInterval: $$NumberInputProps['stepHoldInterval'] = 100;
    export let hideControls: $$NumberInputProps['hideControls'] = false;
    export let precision: $$NumberInputProps['precision'] = 0;
    export let noClampOnBlur: $$NumberInputProps['noClampOnBlur'] = false;
    export let formatter: $$NumberInputProps['formatter'] = defaultFormatter;
    export let parser: $$NumberInputProps['parser'] = defaultParser;
</script>

<!--
@component
**DISCLAIMER**: In most cases, you should not use Input component in your application. Input component is a base for other inputs and was not designed to be used directly.

Base component to create custom inputs
	
@see https://svelteui.org/core/input
@example
    ```svelte
    <Input
      icon={Twitter}
      placeholder="Your twitter"
      rightSectionWidth={70}
      override={{ '& .rightSection': { pointerEvents: 'none' } }}
    >
		<Badge slot='rightSection' color="blue" variant="filled">
			new
		</Badge>
	<Input />
    ```
-->

<Input />
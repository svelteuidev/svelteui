<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { css, dark } from '$lib/styles';
	import Input from '../Input/Input.svelte';
	import { CONTROL_SIZES, defaultFormatter, defaultParser } from './NumberInput.styles';
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
	/** Input default value, set as the value if none is provided */
	export let defaultValue: $$NumberInputProps['defaultValue'] = 0;
	/** The decimal separator to be used if the value is decimal, used by the formatter and parser */
	export let decimalSeparator: $$NumberInputProps['decimalSeparator'] = '.';
	/** The minimum value the input will allow */
	export let min: $$NumberInputProps['min'] = -Infinity;
	/** The maximum value the input will allow */
	export let max: $$NumberInputProps['max'] = Infinity;
	/** The number by which the value will be incremented/decremented */
	export let step: $$NumberInputProps['step'] = 1;
	/** The delay in miliseconds before stepping the value when holding the controls */
	export let stepHoldDelay: $$NumberInputProps['stepHoldDelay'] = 0;
	/** The interval in miliseconds between each stepping of the value when holding the controls */
	export let stepHoldInterval: $$NumberInputProps['stepHoldInterval'] = 100;
	/** Hides the increment/decrement controls */
	export let hideControls: $$NumberInputProps['hideControls'] = false;
	/** Amount of decimal digits */
	export let precision: $$NumberInputProps['precision'] = 0;
	/** Prevents value clamp on input blur */
	export let noClampOnBlur: $$NumberInputProps['noClampOnBlur'] = false;
	/** Formats the value into the input string shown */
	export let formatter: $$NumberInputProps['formatter'] = defaultFormatter;
	/** Parses the value provided by the formatter */
	export let parser: $$NumberInputProps['parser'] = defaultParser;

	const dispatch = createEventDispatcher();

	let _value;
	let inputRef;
	let holdTimeout = null;

	function formatNumber(val: string | number = ''): string {		
		let parsedStr = typeof val === 'number' ? String(val) : val;

		// replaces all periods '.' for the given decimal separator
		if (decimalSeparator) {
			parsedStr = parsedStr.replace(/\./g, decimalSeparator);
		}

		return formatter(parsedStr);
	}

	function parseNumber(val: string): string {
		let number = val;

		// replaces all decimal separators for a period '.'
		if (decimalSeparator) {
			number = number.replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.');
		}

		return parser(number);
	}

	function _valueC(val) {
		if (val === undefined && typeof defaultValue === 'number') {
			return defaultValue;
		}
		if (typeof val !== 'number') {
			return undefined;
		}
		return val;
	}

	function onInput() {
		if (this.value === '' || this.value === '-') {
			_value = undefined;
		} else {
			const parsedNumber = parseNumber(this.value);
			if (Number.isNaN(parseNumber)) return;

			const clamped = Math.min(Math.max(parseFloat(parsedNumber), min), max);
			_value = parseFloat(clamped.toFixed(precision));
		}
	}

	function stepInterval(up) {
		holdTimeout = setTimeout(() => {
			onStep(up, false);
		}, stepHoldInterval);
	}

	function onStep(up, first = true) {
		const tmpValue = up ? _value + step : _value - step;
		const clamp = Math.min(Math.max(tmpValue, min), max);
		_value = parseFloat(clamp.toFixed(precision));

		if (first) setTimeout(() => stepInterval(up), stepHoldDelay);
		else stepInterval(up);
	}

	function onStepDone() {
		clearTimeout(holdTimeout);
		holdTimeout = null;
	}

	function onKeyDown() {
		// @todo: still not working
		if (this.key === 'ArrowUp') {
			onStep(true);
		} else if (this.key === 'ArrowDown') {
			onStep(false);
		}
	}

	function onKeyUp() {
		// @todo: still not working
		if (this.key !== 'ArrowUp' && this.key !== 'ArrowDown') return;
		onStepDone();
	}

	function onBlur() {
		if (noClampOnBlur) return;
		inputRef.value = formatNumber(_value);
	}

	$: ControlStyles = css({
		display: 'flex',
		flexDirection: 'column',
		height: 'calc(100% - 2px)',
		margin: 1,
		marginRight: 1,

		'& .control': {
			margin: 0,
			position: 'relative',
			flex: '0 0 50%',
			boxSizing: 'border-box',
			width: CONTROL_SIZES[size],
			padding: 0,
			WebkitTapHighlightColor: 'transparent',
			borderBottom: '1px solid $gray400',
			borderLeft: '1px solid $gray400',
			borderTop: 0,
			borderRight: 0,
			backgroundColor: 'transparent',
			marginRight: 1,

			[`${dark.selector} &`]: {
				borderBottom: '1px solid $dark400',
				borderLeft: '1px solid $dark400'
			},

			'&:not(:disabled):hover': {
				backgroundColor: '$gray50',

				[`${dark.selector} &`]: {
					backgroundColor: '$dark600'
				}
			},

			'&::after': {
				position: 'absolute',
				top: 'calc(50% - 2.5px)',
				left: 'calc(50% - 4.5px)',
				content: '""',
				display: 'block',
				width: 0,
				height: 0,
				borderStyle: 'solid'
			},
			'&.control-up': {
				borderTopRightRadius: `$${radius}`,

				'&::after': {
					borderWidth: '0px 5px 5px 5px',
					borderColor: 'transparent transparent $black transparent',

					[`${dark.selector} &`]: {
						borderColor: 'transparent transparent $dark50 transparent'
					}
				},

				'&:disabled::after': {
					borderBottomColor: '$gray500',
					[`${dark.selector} &`]: {
						borderBottomColor: '$dark200'
					}
				}
			},
			'&.control-down': {
				borderTopRightRadius: `$${radius}`,
				borderBottom: 0,

				'&::after': {
					borderWidth: '5px 5px 0px 5px',
					borderColor: '$black transparent transparent transparent',

					[`${dark.selector} &`]: {
						borderColor: '$dark50 transparent transparent transparent'
					}
				},

				'&:disabled::after': {
					borderTopColor: '$gray500',
					[`${dark.selector} &`]: {
						borderTopColor: '$dark200'
					}
				}
			}
		}
	});

	$: _value = _valueC(value);

	// @todo: propagate on:input event with parsed value
	$: dispatch('input', value); // @todo: check this

	// @todo: verify clamp logic
</script>

<!--
@component
**DISCLAIMER**: In most cases, you should not use Input component in your application. Input component is a base for other inputs and was not designed to be used directly.

Base component to create custom inputs
	
@see https://svelteui.org/core/input
@example
    ```svelte
    <NumberInput defaultValue={2} />
	<NumberInput defaultValue={0} step={0.2} precision={2} decimalSeparator="/" />
    ```
-->

<Input
	{root}
	{icon}
	{iconWidth}
	{iconProps}
	{wrapperProps}
	{required}
	{radius}
	{variant}
	{disabled}
	{invalid}
	class="{className}"
	override={{ ...override, '& .rightSection': { width: 'auto' } }}
	value={formatNumber(_value)}
	on:input={onInput}
	on:onkeyup={onKeyUp}
	on:onkeydown={onKeyDown}
	on:blur={onBlur}
	bind:element={inputRef}
>
	<div slot="rightSection" class="controls {ControlStyles()}">
		{#if !hideControls}
			<button
				class="control control-up"
				type="button"
				tabIndex={-1}
				aria-hidden
				disabled={_value >= max}
				on:mousedown={() => onStep(true)}
				on:mouseup={onStepDone}
				on:mouseleave={onStepDone}
			/>
			<button
				class=" control control-down"
				type="button"
				tabIndex={-1}
				aria-hidden
				disabled={_value <= min}
				on:mousedown={() => onStep(false)}
				on:mouseup={onStepDone}
				on:mouseleave={onStepDone}
			/>
		{/if}
	</div>
</Input>

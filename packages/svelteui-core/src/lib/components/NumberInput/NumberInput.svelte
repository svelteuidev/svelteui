<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { css, dark } from '$lib/styles';
	import { TextInput } from '../TextInput';
	import { CONTROL_SIZES, defaultFormatter, defaultParser } from './NumberInput.styles';
	import type { NumberInputProps as $$NumberInputProps } from './NumberInput.styles';

	/** Used for forwarding actions from component */
	export let use: $$NumberInputProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$NumberInputProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$NumberInputProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$NumberInputProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$NumberInputProps['root'] = 'input';
	/** The placeholder for the input */
	export let placeholder: $$NumberInputProps['placeholder'] = undefined;
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
	/** Input value */
	export let value: $$NumberInputProps['value'] = undefined;
	/** Input default value, set as the value if none is provided */
	export let defaultValue: $$NumberInputProps['defaultValue'] = undefined;
	/** The decimal separator to be used if the value is decimal, used by the formatter and parser */
	export let decimalSeparator: $$NumberInputProps['decimalSeparator'] = '.';
	/** The minimum value the input will allow */
	export let min: $$NumberInputProps['min'] = -Infinity;
	/** The maximum value the input will allow */
	export let max: $$NumberInputProps['max'] = Infinity;
	/** The number by which the value will be incremented/decremented */
	export let step: $$NumberInputProps['step'] = 1;
	/** The delay in miliseconds before stepping the value when holding the controls */
	export let stepHoldDelay: $$NumberInputProps['stepHoldDelay'] = 250;
	/** The interval in miliseconds between each stepping of the value when holding the controls */
	export let stepHoldInterval: $$NumberInputProps['stepHoldInterval'] = 150;
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
	/** Function that allows incrementing the value outside the component, useful for external controls */
	export function increment() {
		onStep(true, false)
	}
	/** Function that allows decrementing the value outside the component, useful for external controls */
	export function decrement() {
		onStep(false, false)
	}

	const dispatch = createEventDispatcher();

	let isKeyDown = false;
	let stepCount = 0;
	let holdTimeout = null;
	let holdDelayTimeout = null;

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

	function onInput() {
		if (this.value === '' || this.value === '-') {
			value = undefined;
		} else {
			const parsedNumber = parseNumber(this.value);
			if (parsedNumber === undefined || Number.isNaN(parseNumber)) return;
			value = parseFloat(parsedNumber);
		}
		dispatch('change', value);
	}

	function stepInterval(up) {
		const interval = typeof stepHoldInterval === 'number'
			? stepHoldInterval
			: stepHoldInterval(stepCount);

		holdTimeout = setTimeout(() => {
			onStep(up, true, false);
		}, interval);
	}

	function onStep(up, hold = true, first = true) {
		const _value = value === undefined ? 0 : value
		const tmpValue = up ? _value + step : _value - step;

		const clamped = _clamp(tmpValue);
		value = parseFloat(clamped.toFixed(precision));
		stepCount += 1;

		// dispatches change events so that listeners can get
		// the original value, not formatted
		dispatch('change', value);

		if (!hold) return;

		if (first) {
			holdDelayTimeout = setTimeout(() => stepInterval(up), stepHoldDelay);
		}
		else {
			stepInterval(up);
		}
	}

	function onStepDone() {
		if (holdDelayTimeout) clearTimeout(holdDelayTimeout);
		if (holdTimeout) clearTimeout(holdTimeout);
		holdDelayTimeout = null;
		holdTimeout = null;
		stepCount = 0;
	}

	function onKeyDown(event) {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
		if (isKeyDown) return;

		isKeyDown = true;
		onStep(event.key === 'ArrowUp');
	}

	function onKeyUp(event) {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
		isKeyDown = false;
		onStepDone();
	}

	function onBlur() {
		if (noClampOnBlur) return;

		const clamped = _clamp(value);
		value = parseFloat(clamped.toFixed(precision));;
		dispatch('change', value);

		(element as HTMLInputElement).value = formatNumber(value);
	}

	function _clamp(value) {
		return Math.min(Math.max(value, min), max); 
	}

	function _valueC(val: number): number | undefined {
		if (val === undefined && typeof defaultValue === 'number') {
			return defaultValue;
		}
		if (typeof val !== 'number') {
			return undefined;
		}
		return val;
	}

	$: value = _valueC(value);
	$: showControls = !hideControls && variant !== 'unstyled' && !disabled

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
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Number input component that allows inputting numbers and incremeting/decrementing them, as well as set steps, minimum and maximum
values and add custom parsers and formatters.
	
@see https://svelteui.org/core/number-input
@example
    ```svelte
    <NumberInput defaultValue={2} />
	<NumberInput max={10} min={0} step={0.5} precision={1} />
	<NumberInput defaultValue={0} step={0.2} precision={2} decimalSeparator="," />
	<NumberInput label='Your age' required defaultValue={0} />
    ```
-->

<TextInput
	{use}
	{root}
	{icon}
	{iconWidth}
	{iconProps}
	{wrapperProps}
	{required}
	{size}
	{radius}
	{variant}
	{disabled}
	{placeholder}
	class="{className}"
	override={{ ...override, '& .rightSection': { width: 'auto' } }}
	value={formatNumber(value)}
	showRightSection={showControls}
	{...$$restProps}
	bind:element={element}
	on:input={onInput}
	on:keyup={onKeyUp}
	on:keydown={onKeyDown}
	on:blur={onBlur}
>
	<div slot="rightSection" class="controls {ControlStyles()}">
		{#if showControls}
			<button
				class="control control-up"
				type="button"
				tabIndex={-1}
				aria-hidden
				disabled={value >= max}
				on:mousedown={() => onStep(true)}
				on:mouseup={onStepDone}
				on:mouseleave={onStepDone}
			/>
			<button
				class=" control control-down"
				type="button"
				tabIndex={-1}
				aria-hidden
				disabled={value <= min}
				on:mousedown={() => onStep(false)}
				on:mouseup={onStepDone}
				on:mouseleave={onStepDone}
			/>
		{/if}
	</div>
</TextInput>

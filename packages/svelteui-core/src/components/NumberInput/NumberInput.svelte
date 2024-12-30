<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { TextInput } from '../TextInput';
	import useStyles from './NumberInput.styles';
	import { defaultFormatter, defaultParser } from './utils';
	import type { NumberInputProps } from './NumberInput';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		overrideControls = {},
		root = 'input',
		placeholder = undefined,
		icon = null,
		iconWidth = 36,
		iconProps = { size: 20, color: 'currentColor' },
		wrapperProps = {},
		required = false,
		radius = 'sm',
		variant = 'default',
		disabled = false,
		size = 'sm',
		value = $bindable(undefined),
		defaultValue = undefined,
		decimalSeparator = '.',
		min = -Infinity,
		max = Infinity,
		step = 1,
		stepHoldDelay = 250,
		stepHoldInterval = 150,
		hideControls = false,
		precision = 0,
		noClampOnBlur = false,
		formatter = defaultFormatter,
		parser = defaultParser,
		onchange = () => {},
		...rest
	}: NumberInputProps = $props();

	/** Function that allows incrementing the value outside the component, useful for external controls */
	export function increment() {
		onStep(true, false);
	}
	/** Function that allows decrementing the value outside the component, useful for external controls */
	export function decrement() {
		onStep(false, false);
	}

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

	// @TODO: see if all these on functions can be simplified by just using getters and
	// setters in the value bind
	function onInput() {
		if (this.value === '' || this.value === '-') {
			value = undefined;
		} else {
			const parsedNumber = parseNumber(this.value);
			if (parsedNumber === undefined || Number.isNaN(parseNumber)) return;
			value = parseFloat(parsedNumber);
		}
		onchange(value);
	}

	function stepInterval(up) {
		const interval =
			typeof stepHoldInterval === 'number' ? stepHoldInterval : stepHoldInterval(stepCount);

		holdTimeout = setTimeout(() => {
			onStep(up, true, false);
		}, interval);
	}

	function onStep(up, hold = true, first = true) {
		const _value = value === undefined ? 0 : value;
		const tmpValue = up ? _value + step : _value - step;

		const clamped = _clamp(tmpValue);
		value = parseFloat(clamped.toFixed(precision));
		stepCount += 1;

		// dispatches change events so that listeners can get
		// the original value, not formatted
		onchange(value);

		if (!hold) return;

		if (first) {
			holdDelayTimeout = setTimeout(() => stepInterval(up), stepHoldDelay);
		} else {
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
		if (noClampOnBlur || value === undefined) return;

		const clamped = _clamp(value);
		value = parseFloat(clamped.toFixed(precision));
		onchange(value);

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

	// Sets value to the default one if the default is defined but value is not
	value = _valueC(value);

	let showControls = $derived(!hideControls && variant !== 'unstyled' && !disabled);

	const { cx, classes, getStyles } = $derived(useStyles({ radius, size }, { name: 'NumberInput' }));
</script>

<!-- @TODO: The error in bind is because the eslint plugin is not yet updated
 for the getter and setter in bind. See https://github.com/sveltejs/svelte/pull/14307  -->
<TextInput
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
	class={cx(className, classes.root)}
	override={{ '& .rightSection': { width: 'auto' }, ...override }}
	bind:value={() => formatNumber(value),
	(updatedValue) => {
		if (updatedValue === '' || updatedValue === '-') {
			value = undefined;
		} else {
			const parsedNumber = parseNumber(updatedValue);
			if (parsedNumber === undefined || Number.isNaN(parseNumber)) return;
			value = parseFloat(parsedNumber);
		}
		onchange(value);
	}}
	showRightSection={showControls}
	use={[[useActions, use]]}
	bind:element
	oninput={onInput}
	onkeyup={onKeyUp}
	onkeydown={onKeyDown}
	onblur={onBlur}
	{...rest}
>
	<slot slot="icon" name="icon" />
	<div
		slot="rightSection"
		class={cx(className, classes.controls, getStyles({ css: overrideControls }))}
	>
		{#if showControls}
			<button
				class={cx(classes.control, classes.controlUp)}
				type="button"
				tabIndex={-1}
				aria-hidden
				disabled={value >= max}
				on:mousedown={() => onStep(true)}
				on:mouseup={onStepDone}
				on:mouseleave={onStepDone}
			/>
			<button
				class={cx(classes.control, classes.controlDown)}
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

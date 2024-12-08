<script lang="ts">
	import useStyles from './InputWrapper.styles';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import LabelElement from './LabelElement.svelte';
	import type { InputWrapperProps } from './InputWrapper';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		label = undefined,
		description = null,
		error = null,
		required = false,
		labelProps = {},
		descriptionProps = {},
		errorProps = {},
		id = 'input-id',
		labelElement = 'label',
		size = 'sm',
		children,
		...rest
	}: InputWrapperProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles({ size }, { name: 'InputWrapper' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{#if label}
		<LabelElement class={classes.label} {...labelProps} {label} {id} {labelElement} {required} />
	{/if}
	{#if description}
		<Text {...descriptionProps} color="gray" class={classes.description}>
			{description}
		</Text>
	{/if}
	{@render children?.()}
	{#if typeof error !== 'boolean' && error}
		<Text {...errorProps} {size} class={classes.error}>
			{error}
		</Text>
	{/if}
</Box>

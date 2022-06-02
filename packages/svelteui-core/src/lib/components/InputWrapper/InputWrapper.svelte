<script lang="ts">
	import useStyles from './InputWrapper.styles';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import LabelElement from './LabelElement.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper.styles';

	export let use: $$InputWrapperProps['use'] = [],
		element: $$InputWrapperProps['element'] = undefined,
		className: $$InputWrapperProps['className'] = '',
		override: $$InputWrapperProps['override'] = {},
		label: $$InputWrapperProps['label'] = 'label',
		description: $$InputWrapperProps['description'] = null,
		error: $$InputWrapperProps['error'] = null,
		required: $$InputWrapperProps['required'] = false,
		labelProps: $$InputWrapperProps['labelProps'] = {},
		descriptionProps: $$InputWrapperProps['descriptionProps'] = {},
		errorProps: $$InputWrapperProps['errorProps'] = {},
		id: $$InputWrapperProps['id'] = 'input-id',
		labelElement: $$InputWrapperProps['labelElement'] = 'label',
		size: $$InputWrapperProps['size'] = 'sm';
	export { className as class };

	let _labelProps;
	$: {
		_labelProps = labelElement === 'label' ? { htmlFor: id, ...labelProps } : { ...labelProps };
	}
	$: ({ cx, classes, getStyles } = useStyles({ size }));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	{#if label}
		<LabelElement class={classes.label} {..._labelProps} {label} {id} {labelElement} {required} />
	{/if}
	{#if description}
		<Text {...descriptionProps} color="gray" class={classes.description}>
			{description}
		</Text>
	{/if}
	<slot />
	{#if typeof error !== 'boolean' && error}
		<Text {...errorProps} {size} class={classes.error}>
			{error}
		</Text>
	{/if}
</Box>

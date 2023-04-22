<script lang="ts">
	import useStyles from './InputWrapper.styles';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import LabelElement from './LabelElement.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper';

	interface $$Props extends $$InputWrapperProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		label: $$Props['label'] = 'label',
		description: $$Props['description'] = null,
		error: $$Props['error'] = null,
		required: $$Props['required'] = false,
		labelProps: $$Props['labelProps'] = {},
		descriptionProps: $$Props['descriptionProps'] = {},
		errorProps: $$Props['errorProps'] = {},
		id: $$Props['id'] = 'input-id',
		labelElement: $$Props['labelElement'] = 'label',
		size: $$Props['size'] = 'sm';
	export { className as class };

	let _labelProps;
	$: {
		_labelProps = labelElement === 'label' ? { htmlFor: id, ...labelProps } : { ...labelProps };
	}
	$: ({ cx, classes, getStyles } = useStyles({ size }, { name: 'InputWrapper' }));
</script>

<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...$$restProps}
>
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

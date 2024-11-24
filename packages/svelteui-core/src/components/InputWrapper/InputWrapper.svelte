<script lang="ts">
	import useStyles from './InputWrapper.styles';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import LabelElement from './LabelElement.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		label?: $$Props['label'];
		description?: $$Props['description'];
		error?: $$Props['error'];
		required?: $$Props['required'];
		labelProps?: $$Props['labelProps'];
		descriptionProps?: $$Props['descriptionProps'];
		errorProps?: $$Props['errorProps'];
		id?: $$Props['id'];
		labelElement?: $$Props['labelElement'];
		size?: $$Props['size'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ size }, { name: 'InputWrapper' }));
</script>

<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
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

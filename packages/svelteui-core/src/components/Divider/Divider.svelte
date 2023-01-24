<script lang="ts">
	import Error from '$lib/internal/errors/Error.svelte';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import useStyles from './Divider.styles';
	import { DividerErrors } from './Divider.errors';
	import type { DividerProps as $$DividerProps } from './Divider';

	interface $$Props extends $$DividerProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'gray',
		orientation: $$Props['orientation'] = 'horizontal',
		size: $$Props['size'] = 'xs',
		label: $$Props['label'] = null,
		labelPosition: $$Props['labelPosition'] = 'left',
		labelProps: $$Props['labelProps'] = null,
		variant: $$Props['variant'] = 'solid';
	export { className as class };

	$: showsLabel = (label || $$slots.label) && orientation === 'horizontal';
	$: isVertical = orientation === 'vertical';
	$: isHorizontal = orientation === 'horizontal';

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (isVertical && (label || $$slots.label)) {
		observable = true;
		err = DividerErrors[0];
	}

	$: if (observable) override = { display: 'none' };
	$: ({ cx, classes, getStyles } = useStyles({ color, size, variant }, { name: "Divider" }));
</script>

<Error {observable} component="Divider" code={err} />

<!--
@component

Renders horizontal or vertical line with support for label string or component.

@see https://svelteui.org/core/container
@example
    ```svelte
    <Divider />
    <Divider variant='dashed' />
    <Divider variant='dotted' />
    <Divider size='md' />
    <Divider label="This is a new section" labelPosition='center' />
    <Divider label="Click here" labelPosition='right' labelProps={{ variant: 'link', href: 'https://svelteui.org', root: 'a' }} />
    <Divider>
        <Button slot='label' />
    </Divider>
    ```
-->
<Box
	bind:element
	{use}
	class={cx(
		className,
		{
			'svelteui-Divider-horizontal': isHorizontal,
			'svelteui-Divider-vertical': isVertical,
			'shows-label': showsLabel
		},
		getStyles({ css: override })
	)}
	{...$$restProps}
>
	{#if showsLabel}
		<Text class={cx(classes.label, labelPosition)} {...labelProps} size={labelProps?.size || size}>
			<slot name="label">
				{label}
			</slot>
		</Text>
	{/if}
</Box>

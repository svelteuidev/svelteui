<script lang="ts">
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
    import { DividerErrors } from './Divider.errors';
    import Error from '$lib/internal/errors/Error.svelte';
	import type { DividerProps as $$DividerProps } from './Divider.styles';

	/** Used for forwarding actions from component */
	export let use: $$DividerProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$DividerProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$DividerProps['override'] = {};
    /** Color of the divider line from theme */
	export let color: $$DividerProps['color'] = 'dark';
    /** The orientation of the divider, can be 'horizontal' or 'vertical' */
	export let orientation: $$DividerProps['orientation'] = 'horizontal';
    /** The size of the divider height in horizontal orientation and width in vertical orientation */
	export let size: $$DividerProps['size'] = 'xs';
    /** The label text to be added to the horizontal orientation, vertical not supported */
	export let label: $$DividerProps['label'] = null;
    /** The positioning of the label in the orizontal orientation */
	export let labelPosition: $$DividerProps['labelPosition'] = 'left';
    /** The props to be passed to the Text component in the label */
	export let labelProps: $$DividerProps['labelProps'] = null;
    /** The variant of the divider, applied to its border-style */
	export let variant: $$DividerProps['variant'] = 'solid';

	$: showsLabel = (label || $$slots.label) && orientation === 'horizontal';
	$: isVertical = orientation === 'vertical';
	$: isHorizontal = orientation === 'horizontal';

	$: DividerStyles = {
		'&.horizontal': {
			border: 0,
			borderTopWidth: typeof size === 'number' ? `${size}px` : `$${size}`,
			borderTopColor: `$${color}400`,
			borderTopStyle: variant,
			margin: 0
		},
		'&.vertical': {
			border: 0,
			alignSelf: 'stretch',
			height: '100%',
			borderLeftWidth: typeof size === 'number' ? `${size}px` : `$${size}`,
			borderLeftColor: `$${color}400`,
			borderLeftStyle: variant
		},
		'&.shows-label': {
			borderTop: '0 !important'
		},
		'& .label': {
			display: 'flex',
			alignItems: 'center',
			color: `$${color}400`,

			'&.left': {
				'&::before': {
					display: 'none'
				}
			},

			'&.right': {
				'&::after': {
					display: 'none'
				}
			},

			'&::before': {
				content: '""',
				flex: 1,
				height: 1,
				borderTopWidth: typeof size === 'number' ? `${size}px` : `$${size}`,
				borderTopStyle: `${variant}`,
				borderTopColor: `$${color}300`,
				marginRight: '$xs'
			},

			'&::after': {
				content: '""',
				flex: 1,
				borderTopWidth: typeof size === 'number' ? `${size}px` : `$${size}`,
				borderTopStyle: `${variant}`,
				borderTopColor: `$${color}300`,
				marginLeft: '$xs'
			}
		}
	};

    // --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (isVertical && (label || $$slots.label)) {
		observable = true;
		err = DividerErrors[0];
	}

	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="Divider" code={err} />

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

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
	{use}
	css={{ ...DividerStyles, ...override }}
	class="{className} {isHorizontal ? 'horizontal' : ''} {isVertical ? 'vertical' : ''} {showsLabel
		? 'shows-label'
		: ''}"
	{...$$restProps}
>
	{#if showsLabel}
		<Text class="label {labelPosition}" {...labelProps} size={labelProps?.size || size}>
			<slot name="label">
				{label}
			</slot>
		</Text>
	{/if}
</Box>

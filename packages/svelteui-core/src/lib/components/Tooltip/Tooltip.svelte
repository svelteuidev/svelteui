<script lang="ts">
	import { onMount } from 'svelte';
	import { dark, theme } from '$lib/styles';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import type { CSS } from '$lib/styles';
	import type { TooltipProps as $$TooltipProps } from './Tooltip.styles';

	/** Used for forwarding actions from component */
	export let use: $$TooltipProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$TooltipProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$TooltipProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$TooltipProps['override'] = {};
	/** Tooltip content */
	export let label: $$TooltipProps['label'] = '';
	/** Tooltip opened state for controlled variant */
	export let opened: $$TooltipProps['opened'] = true;
	/** Open delay in ms, 0 to disable delay */
	export let openDelay: $$TooltipProps['openDelay'] = 0;
	/** Close delay in ms, 0 to disable delay */
	export let closeDelay: $$TooltipProps['closeDelay'] = 0;
	/** Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme */
	export let color: $$TooltipProps['color'] = 'gray';
	/** Radius from theme.radius, or number to set border-radius in px */
	export let radius: $$TooltipProps['radius'] = 'sm';
	/** True to disable tooltip */
	export let disabled: $$TooltipProps['disabled'] = false;
	/** Arrow size in px */
	export let arrowSize: $$TooltipProps['arrowSize'] = 2;
	/** Tooltip width in px or auto */
	export let width: $$TooltipProps['width'] = 'auto';
	/** Allow multiline tooltip content */
	export let wrapLines: $$TooltipProps['wrapLines'] = false;
	export let allowPointerEvents: $$TooltipProps['allowPointerEvents'] = false;
	/** Get tooltip refrence element */
	export let tooltipRef: $$TooltipProps['tooltipRef'] = null;
	/** Tooltip id to bind aria-describedby */
	export let tooltipId: $$TooltipProps['tooltipId'] = null;
	/** Functions */
	export let onMouseEnter = (args?: any) => {};
	export let onMouseLeave = (args?: any) => {};

	/** --------PopperProps--------------------------------------- */
	export let zIndex: $$TooltipProps['zIndex'] = 300;
	/** The positioning of the popper relative to the reference */
	export let position: $$TooltipProps['position'] = 'top';
	/** The placement of the popper relative to the reference */
	export let placement: $$TooltipProps['placement'] = 'center';
	/** Spacing between the reference and the popper, in pixels */
	export let gutter: $$TooltipProps['gutter'] = 5;
	/** Renders the popper arrow if true */
	export let withArrow: $$TooltipProps['withArrow'] = false;
	/** The transition duration of the popper mount/unmount */
	export let transitionDuration: $$TooltipProps['transitionDuration'] = 100;

	let openTimeoutRef: number, closeTimeoutRef: number;
	let _opened = false;
	let ToolTipStyles: CSS;

	$: visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;

	$: ToolTipStyles = {
		position: 'relative',
		display: 'inline-block',

		'& .body': {
			[`${dark.selector} &`]: {
				bc: theme.colors['dark300'].value,
				color: theme.colors['dark900'].value
			},
			backgroundColor: theme.colors['dark900'].value,
			lineHeight: theme.lineHeights.md,
			fontSize: theme.fontSizes.sm,
			borderRadius: theme.radii[radius].value,
			padding: `${+theme.space.xs.value / 2}px ${theme.space.xs.value}px`,
			color: 'white',
			position: 'relative',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},

		'& .arrow': {
			[`${dark.selector} &`]: {
				bg: theme.colors[`${color}300`].value
			},
			border: 0,
			background: theme.colors[`${color}900`].value,
			zIndex: 1
		}
	};

	const handleOpen = () => {
		window.clearTimeout(closeTimeoutRef);

		if (openDelay !== 0) {
			openTimeoutRef = window.setTimeout(() => {
				_opened = true;
			}, openDelay);
		} else {
			_opened = true;
		}
	};

	const handleClose = () => {
		window.clearTimeout(openTimeoutRef);

		if (closeDelay !== 0) {
			closeTimeoutRef = window.setTimeout(() => {
				_opened = false;
			}, closeDelay);
		} else {
			_opened = false;
		}
	};

	onMount(() => {
		window.clearTimeout(openTimeoutRef);
		window.clearTimeout(closeTimeoutRef);
	});
</script>

<Box
	bind:element
	on:pointerenter={(event) => {
		handleOpen();
		typeof onMouseEnter === 'function' && onMouseEnter(event);
	}}
	on:pointerleave={(event) => {
		handleClose();
		typeof onMouseLeave === 'function' && onMouseLeave(event);
	}}
	on:focus={handleOpen}
	on:blur={handleClose}
	class={className}
	css={{ ...ToolTipStyles, ...override }}
	{use}
	{tooltipId}
	{...$$restProps}
>
	<Popper
		reference={element}
		{transitionDuration}
		{position}
		{placement}
		{gutter}
		{withArrow}
		{arrowSize}
		{zIndex}
		mounted={visible}
		arrowDistance={3}
	>
		<Box
			bind:this={tooltipRef}
			class="body"
			css={{
				pointerEvents: allowPointerEvents ? 'all' : 'none',
				whiteSpace: wrapLines ? 'normal' : 'nowrap',
				width
			}}
		>
			{label}
		</Box>
	</Popper>
	<slot />
</Box>

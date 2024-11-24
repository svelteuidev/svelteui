<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { CloseButton } from '../ActionIcon';
	import { Box } from '../Box';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Loader } from '../Loader';
	import { Text } from '../Text';
	import useStyles from './Notification.styles';
	import type {
		NotificationProps as $$NotificationProps,
		NotificationEvents as $$NotificationEvents
	} from './Notification';

	interface $$Props extends $$NotificationProps {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$NotificationEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = 'blue',
		override: $$Props['override'] = {},
		title: $$Props['title'] = undefined,
		color: $$Props['color'] = 'blue',
		radius: $$Props['radius'] = 'sm',
		loading: $$Props['loading'] = false,
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = 16,
		iconProps: $$Props['iconProps'] = {},
		withCloseButton: $$Props['withCloseButton'] = true,
		closeButtonLabel: $$Props['closeButtonLabel'] = undefined,
		closeButtonProps: $$Props['closeButtonProps'] = {};
	export { className as class };

	const dispatch = createEventDispatcher();

	function onClose() {
		dispatch('close');
	}

	$: ({ cx, classes } = useStyles({ color, radius }, { override, name: 'Notification' }));
</script>

<Box
	{use}
	bind:element
	role="alert"
	class={cx(className, classes.root, {
		withIcon: icon,
		withLoader: loading
	})}
	{...$$restProps}
>
	<slot name="icon">
		{#if icon && !loading}
			<IconRenderer {icon} className={classes.icon} {...iconProps} />
		{/if}
	</slot>
	{#if loading}
		<Loader class={classes.loader} size={28} {color} />
	{/if}
	<div class={classes.content}>
		{#if title}
			<Text class={classes.title} size="sm" weight={500}>
				{title}
			</Text>
		{/if}
		<Text class={classes.description} size="sm" color="dimmed">
			<slot />
		</Text>
	</div>
	{#if withCloseButton}
		<CloseButton
			class={classes.closeButton}
			aria-label={closeButtonLabel}
			variant="hover"
			size={28}
			{iconSize}
			{...closeButtonProps}
			on:click={onClose}
		/>
	{/if}
</Box>

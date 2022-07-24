<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import useStyles from './Notification.styles';
	import { Box } from '../Box';
	import { CloseButton } from '../ActionIcon';
	import { Loader } from '../Loader';
	import { Text } from '../Text';
	import type { NotificationProps as $$NotificationProps } from './Notification.styles';

	export let use: $$NotificationProps['use'] = [],
		element: $$NotificationProps['element'] = undefined,
		className: $$NotificationProps['className'] = 'blue',
		override: $$NotificationProps['override'] = {},
		title: $$NotificationProps['title'] = undefined,
		color: $$NotificationProps['color'] = 'blue',
		radius: $$NotificationProps['radius'] = 'sm',
		loading: $$NotificationProps['loading'] = false,
		icon: $$NotificationProps['icon'] = undefined,
		iconSize: $$NotificationProps['iconSize'] = 16,
		iconProps: $$NotificationProps['iconProps'] = {},
		withCloseButton: $$NotificationProps['withCloseButton'] = true,
		closeButtonLabel: $$NotificationProps['closeButtonLabel'] = undefined,
		closeButtonProps: $$NotificationProps['closeButtonProps'] = {};
	export { className as class };

	const dispatch = createEventDispatcher();

	function onClose() {
		dispatch('close');
	}

	$: ({ cx, classes } = useStyles({ color, radius }, { override }));
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
	{#if icon && !loading}
		<slot class={classes.icon} name="icon">
			<svelte:component this={icon} class={classes.icon} {...iconProps} />
		</slot>
	{/if}
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

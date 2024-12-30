<script lang="ts">
	import { CloseButton } from '../ActionIcon';
	import { Box } from '../Box';
	import { IconRenderer } from '../IconRenderer';
	import { Loader } from '../Loader';
	import { Text } from '../Text';
	import useStyles from './Notification.styles';
	import type { NotificationProps } from './Notification';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = 'blue',
		override = {},
		title = undefined,
		color = 'blue',
		radius = 'sm',
		loading = false,
		iconComponent = undefined,
		iconSize = 16,
		iconProps = {},
		withCloseButton = true,
		closeButtonLabel = undefined,
		closeButtonProps = {},
		onclose = () => {},
		icon,
		children,
		...rest
	}: NotificationProps = $props();

	let { cx, classes } = $derived(useStyles({ color, radius }, { override, name: 'Notification' }));
</script>

<Box
	{use}
	bind:element
	role="alert"
	class={cx(className, classes.root, {
		withIcon: icon,
		withLoader: loading
	})}
	{...rest}
>
	{#if icon && !loading}
		{@render icon()}
	{/if}
	{#if iconComponent && !loading}
		<IconRenderer className={classes.icon} icon={iconComponent} {iconProps} />
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
			{@render children?.()}
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
			onclick={onclose}
		/>
	{/if}
</Box>

<script lang="ts">
	import { Box } from '../Box';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { CloseButton } from '../ActionIcon';
	import useStyles from './Alert.styles';
	import type { AlertProps } from './Alert';

	let {
		use = [],
		element = undefined,
		className = 'blue',
		override = {},
		title = undefined,
		color = 'red',
		radius = 'sm',
		variant = 'light',
		iconComponent = undefined,
		iconSize = 16,
		iconProps = {},
		withCloseButton = false,
		closeButtonLabel = undefined,
		onclose = () => {},
		icon,
		children,
		...rest
	}: AlertProps = $props();

	let { cx, classes } = $derived(
		useStyles({ color, radius, variant }, { name: 'Alert', override })
	);
</script>

<Box {use} bind:element role="alert" class={cx(className, variant, classes.root)} {...rest}>
	<div class={classes.wrapper}>
		{#if icon}
			<div class={classes.icon}>
				{@render icon()}
			</div>
		{/if}
		{#if iconComponent}
			<IconRenderer icon={iconComponent} className={classes.icon} {iconSize} {iconProps} />
		{/if}

		<div class={classes.content}>
			{#if title}
				<div class={classes.title}>
					<span class={classes.label}>
						{title}
					</span>
					{#if withCloseButton}
						<CloseButton
							class={classes.closeButton}
							aria-label={closeButtonLabel}
							variant="transparent"
							size={iconSize}
							{iconSize}
							onclick={onclose}
						/>
					{/if}
				</div>
			{/if}
			<div class={classes.message}>
				{@render children?.()}
			</div>
		</div>
	</div>
</Box>

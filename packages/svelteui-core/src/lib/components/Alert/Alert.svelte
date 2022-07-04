<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import useStyles from './Alert.styles';
	import { Box } from '../Box';
	import { CloseButton } from '../ActionIcon';
	import type { AlertProps as $$AlertProps } from './Alert.styles';

	interface $$Props extends $$AlertProps {}

	export let use: $$AlertProps['use'] = [],
		element: $$AlertProps['element'] = undefined,
		className: $$AlertProps['className'] = 'blue',
		override: $$AlertProps['override'] = {},
		title: $$AlertProps['title'] = undefined,
		color: $$AlertProps['color'] = 'red',
		radius: $$AlertProps['radius'] = 'sm',
		variant: $$AlertProps['variant'] = 'light',
		icon: $$AlertProps['icon'] = undefined,
		iconSize: $$AlertProps['iconSize'] = 16,
		iconProps: $$AlertProps['iconProps'] = {},
		withCloseButton: $$AlertProps['withCloseButton'] = false,
		closeButtonLabel: $$AlertProps['closeButtonLabel'] = undefined;
	export { className as class };

	const dispatch = createEventDispatcher();

	function onClose() {
		dispatch('close');
	}

	$: ({ cx, classes } = useStyles({ color, radius, variant }, { override }));
</script>

<Box {use} bind:element role="alert" class={cx(className, variant, classes.root)} {...$$restProps}>
	<div class={classes.wrapper}>
		{#if icon}
			<svelte:component this={icon} class={classes.icon} {...iconProps} />
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
							on:click={onClose}
						/>
					{/if}
				</div>
			{/if}
			<div class={classes.message}>
				<slot />
			</div>
		</div>
	</div>
</Box>

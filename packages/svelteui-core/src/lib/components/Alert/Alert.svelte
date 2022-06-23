<script lang="ts">
	import { Box } from '../Box';
    import { CloseButton } from '../ActionIcon';
	import useStyles from './Alert.styles';
	import type { AlertProps as $$AlertProps } from './Alert.styles';

	export let use: $$AlertProps['use'] = [],
		element: $$AlertProps['element'] = undefined,
		className: $$AlertProps['className'] = 'blue',
		override: $$AlertProps['override'] = {},
        title: $$AlertProps['title'] = undefined,
		color: $$AlertProps['color'] = 'orange',
		radius: $$AlertProps['radius'] = 'sm',
		variant: $$AlertProps['variant'] = 'light',
		icon: $$AlertProps['icon'] = undefined,
		iconSize: $$AlertProps['iconSize'] = 16,
		withCloseButton: $$AlertProps['withCloseButton'] = false,
		closeButtonLabel: $$AlertProps['closeButtonLabel'] = undefined,
        onClose: $$AlertProps['onClose'] = () => {};
	export { className as class };

    $: ({ cx, classes, getStyles } = useStyles({ color, radius, variant }));
</script>

<Box
    bind:element
    role='alert'
    class={cx(className, variant, getStyles({ css: override, variation: variant }))}
    {use}
    {...$$restProps}
>
    <div class={classes.wrapper}>
        {#if icon}
            <slot class={classes.icon} name='icon'>
                <svelte:component
                    this={icon}
                    class={classes.icon}
		        />
            </slot>
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
                            iconSize={iconSize}
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

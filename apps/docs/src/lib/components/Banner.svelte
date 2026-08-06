<script lang="ts">
	import { run } from 'svelte/legacy';

	// @ts-nocheck
	import { createStyles, Paper, Text, type SvelteUITheme } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { ArrowRight } from 'radix-icons-svelte';

	interface Props {
		href?: any;
		color?: string;
		align?: string;
		icon?: any;
		iconProps?: any;
		themeColors?: boolean;
		children?: import('svelte').Snippet;
	}

	type BannerStyleParams = {
		align: string;
		themeColors: boolean;
	};

	let {
		href = undefined,
		color = 'white',
		align = 'center',
		icon = ArrowRight,
		iconProps = {},
		themeColors = true,
		children
	}: Props = $props();

	let element: HTMLDivElement | undefined = $state(undefined);
	const override = { bc: '$dark700' };

	onMount(() => {
		const container = document.querySelector('.container .title') as HTMLElement;
		if (!container) return;
		container.style.paddingTop = '4rem';
	});

	const useStyles = createStyles(
		(_theme: SvelteUITheme, { align, themeColors }: BannerStyleParams) => ({
			root: {
				position: 'absolute',
				top: 60,
				left: 0,
				right: 0,
				width: '100vw',
				textAlign: align
			},
			wrapper: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '$5',
				color: themeColors ? `$${color}` : color
			},
			title: {
				color: themeColors ? `$${color}` : color
			},
			icon: {
				width: '$10',
				height: '$10'
			}
		})
	);

	let { classes } = $derived(useStyles({ align, themeColors }));
</script>

{#if href}
	<a {href}>
		<Paper bind:element class={classes.root} {override} radius="xs">
			{@const IconHref = icon}
			<div class={classes.wrapper}>
				<Text class={classes.title} weight="bold" tracking="tight" size="lg">
					{@render children?.()}
				</Text>
				<IconHref class={classes.icon} {...iconProps} />
			</div>
		</Paper>
	</a>
{:else}
	<Paper bind:element class={classes.root} {override} radius="xs">
		{@const Icon = icon}
		<div class={classes.wrapper}>
			<Text class={classes.title} weight="bold" tracking="tight" size="lg">
				{@render children?.()}
			</Text>
			<Icon class={classes.icon} {...iconProps} />
		</div>
	</Paper>
{/if}

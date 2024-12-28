<script lang="ts">
	import { run } from 'svelte/legacy';

	// @ts-nocheck
	import { createStyles, Paper, Text } from '@svelteuidev/core';
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

	let {
		href = undefined,
		color = 'white',
		align = 'center',
		icon = ArrowRight,
		iconProps = {},
		themeColors = true,
		children
	}: Props = $props();

	let element = $state();
	const override = { bc: '$dark700' };

	run(() => {
		onMount(() => {
			const container = document.querySelector('.container .title');
			container.style.paddingTop = '4rem';
		});
	});

	const useStyles = createStyles((_, { align, themeColors }) => ({
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
	}));

	let { classes } = $derived(useStyles({ align, themeColors }));
</script>

{#if href}
	<a {href}>
		<Paper bind:element class={classes.root} {override} radius="xs">
			{@const SvelteComponent = icon}
			<div class={classes.wrapper}>
				<Text class={classes.title} weight="bold" tracking="tight" size="lg">
					{@render children?.()}
				</Text>
				<SvelteComponent class={classes.icon} {...iconProps} />
			</div>
		</Paper>
	</a>
{:else}
	<Paper bind:element class={classes.root} {override} radius="xs">
		{@const SvelteComponent_1 = icon}
		<div class={classes.wrapper}>
			<Text class={classes.title} weight="bold" tracking="tight" size="lg">
				{@render children?.()}
			</Text>
			<SvelteComponent_1 class={classes.icon} {...iconProps} />
		</div>
	</Paper>
{/if}

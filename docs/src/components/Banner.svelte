<script lang="ts">
	// @ts-nocheck
	import { createStyles, Paper, Text } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { ArrowRight } from 'radix-icons-svelte';

	export let href = undefined;
	export let color = 'white';
	export let align = 'center';
	export let icon = ArrowRight;
	export let iconProps = {};
	export let themeColors = true;

	let element;
	const override = { bc: '$dark700' };

	$: onMount(() => {
		const container = document.querySelector('.container .title');
		container.style.paddingTop = '4rem';
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

	$: ({ classes } = useStyles({ align, themeColors }));
</script>

{#if href}
	<a {href}>
		<Paper bind:element class={classes.root} {override} radius="xs">
			<div class={classes.wrapper}>
				<Text class={classes.title} weight="bold" tracking="tight" size="lg">
					<slot />
				</Text>
				<svelte:component this={icon} class={classes.icon} {...iconProps} />
			</div>
		</Paper>
	</a>
{:else}
	<Paper bind:element class={classes.root} {override} radius="xs">
		<div class={classes.wrapper}>
			<Text class={classes.title} weight="bold" tracking="tight" size="lg">
				<slot />
			</Text>
			<svelte:component this={icon} class={classes.icon} {...iconProps} />
		</div>
	</Paper>
{/if}

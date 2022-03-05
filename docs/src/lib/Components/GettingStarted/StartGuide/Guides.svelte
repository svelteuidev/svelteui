<script lang="ts">
	import { css } from '@stitches/core';
	import { theme } from '@svelteuidev/core';

	export let title = 'title';
	export let icon: unknown = '';
	export let className = '';
	export let active = {};

	const ButtonStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: `1px solid ${
			$theme.colorScheme === 'dark' ? $theme.colors.dark[8] : $theme.colors.gray[4]
		}`,
		backgroundColor: $theme.colorScheme === 'dark' ? $theme.colors.dark[8] : $theme.white,
		padding: $theme.spacing.xl,
		borderRadius: $theme.radius.md,
		minWidth: '20rem',

		'&:hover': {
			backgroundColor: $theme.colorScheme === 'dark' ? $theme.colors.dark[9] : $theme.colors.gray[0]
		},

		variants: {
			state: {
				active: {
					borderColor: $theme.colors.blue[6]
				}
			}
		}
	});
</script>

<button on:click class="{ButtonStyles(active)} {className}">
	<svelte:component this={icon} />
	<p>{title}</p>
</button>

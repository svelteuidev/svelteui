<script lang="ts">
	import { css } from '@svelteuidev/core';

	export let title = 'title';
	export let icon: unknown = '';
	export let className = '';
	export let active = {};

	const ButtonStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: `1px solid $gray400`,
		backgroundColor: 'White',
		padding: '24px',
		borderRadius: '$md',
		minWidth: '20rem',
		maxHeight: '198px',

		'&:hover': {
			backgroundColor: '$gray50'
		},

		variants: {
			state: {
				active: {
					borderColor: '$primary'
				}
			}
		}
	});
</script>

<button on:click class="{ButtonStyles(active)} {className}">
	<svelte:component this={icon} />
	<p class="uppercase">{title}</p>
</button>

<script lang="ts">
	import { css } from '@svelteuidev/core';

	export let title = 'title';
	export let icon: unknown = '';
	export let className = '';
	export let active = {};

	const ButtonStyles = css({
		['.dark &']: {
			border: `3px solid $dark800`,
			backgroundColor: '$dark800',
			color: '$dark50',
			'&:hover': {
				backgroundColor: '$dark900'
			}
		},
		length: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: `3px solid $gray300`,
		backgroundColor: 'White',
		padding: '24px',
		borderRadius: '$md',
		minWidth: '20rem',
		maxHeight: '198px',
		'&:hover': {
			backgroundColor: '$gray100'
		},
		'& .title': {
			textAlign: 'uppercase'
		},
		variants: {
			state: {
				active: {
					['.dark &']: {
						borderColor: `$blue600`
					},
					borderColor: `$blue600`
				}
			}
		}
	});
</script>

<button on:click class="{ButtonStyles(active)} {className}">
	<svelte:component this={icon} />
	<p class="title">{title}</p>
</button>

<script lang="ts">
	import { css } from '@svelteuidev/core';

	/** Component Props*/
	export let title = 'Package/Title';
	export let description = 'This is the description for the package';

	/** Bind input element to value */
	let input: HTMLInputElement;

	const CardStyles = css({
		['.dark-theme &']: {
			border: `1px solid $dark800`,
			backgroundColor: '$dark800',
			color: '$dark50',
			'&:hover': {
				backgroundColor: '$dark900'
			}
		},
		display: 'flex',
		width: '100%',
		border: `1px solid $gray300`,
		borderRadius: '$sm',
		padding: '20px',
		backgroundColor: 'White',
		alignItems: 'center',
		gap: '1.5rem',
		'&:hover': {
			backgroundColor: '$gray50'
		},
		input: {
			minWidth: '1.5rem',
			minHeight: '1.5rem',
			borderRadius: '$md'
		},
		'& .title': {
			fontSize: '1rem',
			lineHeight: '1.5rem',
			textAlign: 'left',
			fontWeight: '$Medium',
			marginBottom: '0.25rem'
		},
		'& .description': {
			fontSize: '0.875rem',
			lineHeight: '1.25rem',
			color: '$dark500',
			textAlign: 'left'
		}
	});
</script>

<button
	on:click={() => {
		!input.checked ? (input.checked = true) : (input.checked = false);
	}}
	on:click
	class={CardStyles()}
>
	<input bind:this={input} on:change type="checkbox" tabindex="-1" />
	<div>
		<div class="title">
			{title}
		</div>
		<div class="description">
			{description}
		</div>
	</div>
</button>

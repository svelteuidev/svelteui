<script lang="ts">
	// @ts-nocheck
	import { Text, ThemeIcon, theme } from '@svelteuidev/core';

	export let color;
	export let href = '';

	const styles = {
		focusRing: 'auto',
		WebkitTapHighlightColor: 'transparent',
		display: 'flex !important',
		alignItems: 'center',
		color: '$gray700',
		fontWeight: 500,
		fontSize: '$md',
		padding: 5,
		marginLeft: -5,
		marginRight: -5,
		borderRadius: '6px ',
		userSelect: 'none',

		'&:hover': {
			textDecoration: 'none'
		},

		'& + &': {
			marginTop: 5
		},

		'& .active': {
			color: 'black',
			backgroundColor: '$gray50'
		},

		'& .body': {
			marginLeft: +theme.space.md.value
		}
	};
</script>

<Text class="main-link" variant="link" root="a" override={styles} {href}>
	<ThemeIcon size={30} override={{ bc: `$${color}600 !important`, color: 'white', borderRadius: "6px" }} radius="lg">
		<slot name="icon" />
	</ThemeIcon>
	<div class="body"><slot /></div>
</Text>

<script lang="ts">
	import { HamburgerMenu, GithubLogo } from 'radix-icons-svelte';
	import { css, ActionIcon, Switch, Text } from '@svelteuidev/core';

	// @ts-ignore: Unreachable code error
	const NavbarStyles = css({
		[`.dark-theme &`]: {
			backgroundColor: '$dark700',
			borderBottom: '2px solid $gray600'
		},
		position: 'fixed',
		top: '0px',
		left: '0px',
		width: '100%',
		zIndex: 20,
		height: '5rem',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'White',
		boxShadow: '$sm',
		'& a': {
			textDecoration: 'none',
			color: '$gray600',
			fontSize: '1.5rem',
			lineHeight: '2rem'
		},
		'& nav': {
			size: '100%',
			marginRight: 'auto',
			marginLeft: 'auto'
		},
		'& .content': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: '100%',
			paddingLeft: '1.25rem',
			paddingRight: '1.25rem',
			'@sm': {
				paddingLeft: '2.5rem',
				paddingRight: '2.5rem'
			}
		},
		'& .controls': {
			display: 'flex',
			alignItems: 'center',
			gap: '1rem'
		},
		'& .token-ui': {
			color: '$blue500'
		},
		'& .token-version': {
			display: 'none',
			fontWeight: '$Normal',
			color: '$gray600',
			'@sm': {
				display: 'inline-block'
			}
		},
		'& .token-mode': {
			color: '$gray600'
		}
	});

	// @ts-ignore: Unreachable code error
	const BurgerStyles = css({
		display: 'block',
		'@md': {
			display: 'none'
		}
	});
</script>

<header class={NavbarStyles()}>
	<nav>
		<div class="content">
			<span class={BurgerStyles()}>
				<ActionIcon size="lg" variant="default">
					<HamburgerMenu size={25} />
				</ActionIcon>
			</span>
			<Text underline={false} variant="link" align="center" root="a" href="/">
				Svelte<span class="token-ui">UI</span>
				<span class="token-version">v0.5.5</span>
				<span class="token-mode">Beta</span>
			</Text>
			<div class="controls">
				<Switch on:change size="lg" />
				<ActionIcon
					root="a"
					href="https://github.com/Brisklemonade/svelteui"
					target="_blank"
					rel="noreferrer"
					radius="md"
					variant="default"
					size="xl"
				>
					<GithubLogo color="black" size={24} />
				</ActionIcon>
			</div>
		</div>
	</nav>
</header>

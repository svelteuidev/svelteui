<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
	import { GithubLogo, ChevronDown, ArrowRight } from 'radix-icons-svelte';
	import { css, Button, Text, keyframes } from '@svelteuidev/core';

	const HeroStyles = css({
		length: 0,
		'& .container': {
			display: 'flex',
			justifyContent: 'center',
      m: 0
		},

		'& .content-container': {
			width: '880px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '2rem',
			padding: '0rem 1rem'
		},

		'& .button-container': {
			display: 'flex',
			justifyContent: 'center',
			gap: '1rem'
		}
	});

	const PrimaryButton = {
		boxShadow: '0 2px 14px #228be6',
		transition: 'all 0.2s ease-in-out',
		'&:hover': {
			boxShadow: '0 4px 20px #228be6'
		}
	};

	const bounce = keyframes({
		'0%': { transform: 'translateY(-25%)' },
		'50%': { transform: 'none' },
		'100%': { transform: 'translateY(-25%)' }
	});

	// @ts-ignore
	const ChevronStyles = css({
		animation: `${bounce} 1s infinite ease`
	});
</script>

<section class={HeroStyles()}>
	<div class="container">
		<div class="content-container">
			<Text align="center" size={40} weight="bold"
				>Create fully functional and accessible web applications in less time than ever before.</Text
			>
			<Text weight="extrabold" variant="gradient" align="center" size={60}
				>Regardless of design experience.</Text
			>
			<Text weight="semibold" size="xl" align="center"
				>Scroll down to get a better look, check out the source code, or read the documentation &
				get started!</Text
			>
			<div class="button-container">
				<Button href="/docs" size="xl" override={PrimaryButton}>
					<ArrowRight size={20} slot="leftIcon" />
					Get Started
				</Button>
				<Button size="xl" variant="default">
					<GithubLogo size={25} slot="leftIcon" />
					Source Code
				</Button>
			</div>
			<ChevronDown class={ChevronStyles()} size={60} />
		</div>
	</div>
</section>
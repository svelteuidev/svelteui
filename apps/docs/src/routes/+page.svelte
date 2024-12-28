<script>
	import { colorScheme, Box, Button, Group, Container, Title, Text } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';
	import { ComponentsExample, Features, mobile, HomePageExample } from '$lib/components';
	import { base } from '$app/paths';

	const srcCodeButton = {
		m: 0,
		'&:hover': {
			textDecoration: 'none'
		}
	};
	const title = {
		fontFamily: 'var(--font)'
	};
</script>

<!-- ---
layout: 'no_sidebar'
title: 'SvelteUI - A variety of components, actions, transition and utility functions'
index: true
--- -->
<svelte:head>
	<title>SvelteUI - A variety of components, actions, transition and utility functions</title>
</svelte:head>

<Box class="homepage_styles">
	<!-- <Banner href={changelogLink}>Version {changelog.replace('v','').replaceAll('-','.')} is out now</Banner> -->
	<div class="container">
		<h1 class="title">
			Create applications in less time than ever before
			<br class="line-br" />
			<span class="gradient-animation">Regardless of design experience</span>
		</h1>
		<p class="content">
			SvelteUI includes more than 50+ customizable components. Check out the source code, or read
			the documentation & get started!
		</p>
		<Group class="dark-theme" direction={$mobile ? 'column' : 'row'} position="center">
			<a href="{base}/introduction">
				<Button
					fullSize={$mobile ? true : false}
					size="xl"
					variant="gradient"
					gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
					override={{ '&:hover': { textDecoration: 'none' } }}
				>
					<Text weight="bold" override={{ color: 'white !important' }}>Get Started</Text>
				</Button>
			</a>
			<a href="https://github.com/svelteuidev/svelteui">
				<Button
					fullSize={$mobile ? true : false}
					override={srcCodeButton}
					size="xl"
					color={$colorScheme === 'dark' ? 'gray' : 'dark'}
				>
					{#snippet leftIcon()}
										<GithubLogo size={25}  />
									{/snippet}
					<Text weight="bold" color="white">Source Code</Text>
				</Button>
			</a>
		</Group>
	</div>
	<Container override={{ py: '7rem' }} size="xl">
		<Features />
	</Container>
	<Container size="xl">
		<Title
			weight="bold"
			override={{ fontFamily: 'var(--font)', paddingBottom: '2rem' }}
			align="center"
		>
			40+ customizable components
		</Title>
		<ComponentsExample />
		<Group position="right" override={{ pt: '1.5rem' }}>and many more...</Group>
	</Container>
	<Container override={{ py: '7rem' }} size="xl">
		<Title override={title} weight="extrabold" tracking="tight" align="center">
			Less Code. Elegant Solutions.
		</Title>
		<Text size="xl" align="center" root="p" override={{ lineHeight: '$md' }}>
			Spend less time writing UI code and more time building a great experience.
			<br />
			Don't like what you see? Customize every component anyway you like!
		</Text>
		<HomePageExample />
	</Container>
	<Container override={{ py: '4rem' }} size="xl">
		<Title override={title} weight="extrabold" tracking="tight" align="center">
			Ready to get started?
		</Title>
		<Group position="center" override={{ mt: '$10' }} direction={$mobile ? 'column' : 'row'}>
			<a href="{base}/installation"
				><Button fullSize={$mobile ? true : false} size="lg">Yes I am</Button></a
			>
			<a href="{base}/introduction">
				<Button fullSize={$mobile ? true : false} size="lg" variant="outline">
					I'd like to learn more
				</Button>
			</a>
		</Group>
	</Container>
</Box>

<style>
	/* :global(body) {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 600px),fixed 0 0 / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0),fixed 10px 10px / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0);
  }
  */
	/* :global(.article) {
    margin: 0 auto;
  } */

	.container {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 2rem;
		padding-top: 0rem !important;
		width: auto;
	}
	.title {
		font-size: 3rem;
		line-height: 1;
		letter-spacing: 0.05em;
		text-align: center;
		max-width: 64rem;
		margin-left: auto;
		margin-right: auto;
	}

	.line-br {
		display: block;
	}
	.content {
		margin-top: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 500;
		text-align: center;
		max-width: 32rem;
	}
	.gradient-animation {
		color: #228be6;
		background-clip: text;
		animation: hue 20s infinite linear;
		background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-animation: hue 20s infinite linear;
	}
	@media (min-width: 640px) {
		.container {
			padding-top: 3rem;
		}
		.title {
			font-size: 4.5rem;
			line-height: 1;
		}
		.content {
			font-size: 1.5rem;
			line-height: 2rem;
			max-width: 56rem;
		}
	}
	@media (min-width: 768px) {
		.content {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
	}

	@media (min-width: 1024px) {
		.container {
			padding-left: 2rem;
			padding-right: 2rem;
			padding-bottom: 3rem;
		}
		.title {
			font-size: 3.75rem;
			line-height: 1;
		}
		.content {
			font-size: 1.5rem;
			line-height: 2rem;
			margin-right: auto;
			margin-left: auto;
		}
	}

	@media (min-width: 1280px) {
		.title {
			font-size: 4.5rem;
			line-height: 1;
		}
	}

	@keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}

	@-webkit-keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}
</style>

---
layout: 'no_sidebar'
title: 'SvelteUI - A variety of components, actions, transition and utility functions'
index: true
---

<script>
	import { Features, Device, mobile, AllComponents, HomePageExample, Preview, HomePageExampleCode } from 'components';
	import { GithubLogo, ArrowRight } from 'radix-icons-svelte';
	import { portal } from "@svelteuidev/actions";
	import {
		css,
		Box,
		Button,
		Group,
		Container,
		Title,
		Text,
		SimpleGrid,
		SvelteUIProvider,
		ThemeIcon,
		Center,
		Stack,
		Space
	} from '@svelteuidev/core';

	const backgroundStyles = `<style id='svelteui-inject-body' type='text/css'>body {background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 600px),fixed 0 0 / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0),fixed 10px 10px / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0);}.article{margin: 0 auto !important;}.main.nosidebar{margin-left: 0 !important;padding-top: 0 !important;}<\/style>`;

	const srcCodeButton = {
		m: 0,
		'&:hover': {
			textDecoration: 'none'
		}
	}
</script>

<svelte:head>
	{@html backgroundStyles}
</svelte:head>

<SvelteUIProvider class="homepage_styles">
	<div class="container">
		<h1 class="title">
			Create applications in less time than ever before
			<br class="line-br" />
			<span class="gradient-animation">Regardless of design experience</span>
		</h1>
		<p class="content">SvelteUI includes more than 25+ customizable components. Check out the source code, or read the documentation & get started!</p>
		<Group direction={$mobile ? 'column' : 'row'} position="center">
			<Button
				fullSize={$mobile ? true : false}
				href="introduction"
				size="xl"
				override={{ '&:hover': { textDecoration: 'none' } }}
			>
				<Text weight="bold" override={{ color: 'white' }}>Get Started</Text>
			</Button>
			<Button fullSize={$mobile ? true : false} override={srcCodeButton} size="xl" variant="default" href="https://github.com/svelteuidev/svelteui">
				<GithubLogo size={25} slot="leftIcon" />
				<Text weight="bold" color="dark">Source Code</Text>
			</Button>
		</Group>
	</div>
	<Container override={{py: '7rem'}} size="xl">
		<Features />
	</Container>
	<Container override={{ py: '7rem' }} size="xl">
		<Title weight="extrabold" override={{ letterSpacing: '$tight' }} align="center">
			Less Code. Elegant Solutions.
		</Title>
		<Text size="xl" align="center" root="p">
			Spend less time writing UI code and more time building a great experience for your
			customers.
			<br />
			Don't like what you see? Customize every component anyway you like!
		</Text>
		<Preview code={HomePageExampleCode} width={100} cols={1}>
			<HomePageExample />
		</Preview>
	</Container>
	<Container override={{py: '7rem'}} size="xl">
		<Title weight="extrabold" override={{ letterSpacing: '$tight' }} align="center">All Components</Title>
		<Space h='xl' />
		<Space h='xl' />
		<AllComponents />
	</Container>
</SvelteUIProvider>

<style>
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 2rem;
		padding-top: 4rem;
		width: auto;
	}
	.title {
		font-size: 3rem; /* 48px */
		line-height: 1;
		font-weight: 800;
		letter-spacing: -0.05em;
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

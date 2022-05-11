---
layout: 'no_sidebar'
title: 'SvelteUI - A variety of components, actions, transition and utility functions'
index: true
---

<script lang="ts">
	import { Features, Device, mobile } from 'components';
	import { GithubLogo, ArrowRight } from 'radix-icons-svelte';
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
		Stack
	} from '@svelteuidev/core';
	const PrimaryButton = {
		boxShadow: '0 2px 14px #228be6',
		transition: 'all 0.2s ease-in-out',
		color: 'white !important',
		textDecoration: 'none !important',
		'&:hover': {
			boxShadow: '0 4px 20px #228be6'
		}
	};
</script>

<Device />

<SvelteUIProvider class="homepage_styles" withGlobalStyles ssr>
	<div class="container">
		<h1 class="title">
			Create applications in less time than ever before
			<br class="line-br" />
			<span class="gradient-animation">Regardless of design experience</span>
		</h1>
		<p class="content">Check out the source code, or read the documentation & get started!</p>
		<Group direction={$mobile ? 'column' : 'row'} position="center">
			<Button
				fullSize={$mobile ? true : false}
				href="introduction"
				size="xl"
				override={PrimaryButton}
			>
				<ArrowRight size={20} slot="leftIcon" />
				<p>Get Started</p>
			</Button>
			<Button fullSize={$mobile ? true : false} override={{ m: 0 }} size="xl" variant="default">
				<GithubLogo size={25} slot="leftIcon" />
				<p>Source Code</p>
			</Button>
		</Group>
	</div>
	<Container>
		<Features />
	</Container>
	<Container override={{ py: '4rem' }} size="xl">
		<Title weight="extrabold" override={{ letterSpacing: '$tight' }} align="center">
			Less Code. Elegant Solutions.
		</Title>
		<Text size="lg" align="center" root="p">
			Turborepo reimagines build system techniques used by Facebook and Google to remove maintenance
			burden and overhead.
		</Text>
	</Container>
</SvelteUIProvider>

<style>
	:global(.main.nosidebar) {
		margin-left: 0 !important;
		padding-top: 0 !important;
	}
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

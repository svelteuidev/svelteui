<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script lang="ts">
	import { Button, Text, Title } from '@svelteuidev/core';
	import { StarFilled, DiscordLogo } from 'radix-icons-svelte';

	export let error;
	export let status: number;
	console.error(`There was an error ${status} ${error.message}`);
</script>

<svelte:head>
	{#if status >= 500}
		<title>Internal Server Error</title>
	{:else}
		<title>Page Not Found</title>
	{/if}
</svelte:head>

<div class="container">
	{#if status >= 500}
		<div class="flex flex-col items-center ">
			<Title>{status}</Title>
			<p>Sorry, the server had an internal error</p>
			<p>Try checking your connection, then refreshing the page</p>
			<Button href="/">Go Home</Button>
		</div>
	{:else if status > 400}
		<div class="container">
			<div style="margin: 1rem 0rem;">
				<Text root="h1" weight="Bold" size={50} variant="gradient">Congratulations!</Text>
			</div>
			<Text size="xl" root="p">
				You've found a completely secret place on SvelteUI website. Unfortunately, this is only a
				404 page. If you've landed on this page from a link on the SvelteUI website, please{' '}
				<Text
					size="xl"
					root="a"
					variant="link"
					href="https://github.com/brisklemonade/SvelteUI/issues/new">create an issue</Text
				>. Otherwise, here are some learning materials that will help you get started with SvelteUI:
			</Text>
			<ul>
				<li>
					<Text size="xl" variant="link" root="a" href="/docs/contributing/"
						>SvelteUI contributions guideline</Text
					>
				</li>
				<li>
					<Text size="xl" variant="link" root="a" href="/theming/ssr/"
						>Learn how to setup server side rendering with SvelteUI</Text
					>
				</li>
				<li>
					<Text size="xl" variant="link" root="a" href="/theming/"
						>Learn how to customize SvelteUI theme</Text
					>
				</li>
			</ul>
			<Text root="p" size="xl">
				And since you are here, what about following SvelteUI on Twitter and a star on GitHub 😉?
			</Text>

			<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0rem;">
				<Button href="https://github.com/brisklemonade/SvelteUI" variant="default">
					<StarFilled slot="leftIcon" />
					Star SvelteUI on GitHub
				</Button>
				<Button href="https://twitter.com/brisklemonade" color="blue" variant="outline">
					<DiscordLogo slot="leftIcon" />
					Join the SvelteUI Discord
				</Button>
			</div>
		</div>
	{:else}
		<div class="flex flex-col items-center ">
			<Title>Error {status}</Title>
			<Button href="/">Go Home</Button>
		</div>
	{/if}
</div>

<style>
	.container {
		margin: 10rem auto;
		max-width: 50rem;
	}
</style>

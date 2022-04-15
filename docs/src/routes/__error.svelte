<script lang="ts">
	import { Button } from '@svelteuidev/core';

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
			<h1>{status}</h1>
			<p>Sorry, the server had an internal error</p>
			<p>Try checking your connection, then refreshing the page</p>
			<Button href="/">Go Home</Button>
		</div>
	{:else if status > 400}
		<div class="flex flex-col items-center ">
			<h1>{status}</h1>
			<p>Sorry, the page was not found</p>
			<p>You could have mistyped the URL, or the page has moved</p>
			<Button href="/">Go Home</Button>
		</div>
	{:else}
		<div class="flex flex-col items-center ">
			<h1>Error {status}</h1>
			<Button href="/">Go Home</Button>
		</div>
	{/if}
</div>

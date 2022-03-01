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
		<h1>{status}</h1>
		<p>Sorry, the server had an internal error</p>
		<p>Try checking your connection, then refreshing the page</p>
	{:else if status > 400}
		<h1>{status}</h1>
		<p>Sorry, the page was not found</p>
		<p>You could have mistyped the URL, or the page has moved</p>
		<a href="/">Back Home</a>
	{:else}
		<h1>Error {status}</h1>
		<a href="/">Back Home</a>
	{/if}
</div>

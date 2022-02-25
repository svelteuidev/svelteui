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

<div>
	{#if status >= 500}
        <div>
            <p>Status: {status}</p>
            <p>Error: {error}</p>
        </div>
	{:else if status > 400}
        <div>
            <p>Status: {status}</p>
            <p>Error: {error}</p>
        </div>
	{:else}
    <div>
        <p>Status: {status}</p>
        <p>Error: {error}</p>
    </div>
	{/if}
</div>
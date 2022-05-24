<script lang="ts">
	import { io } from '$lib';
	import { Button, Center } from '@svelteuidev/core';

	let isInView;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the actions package</p>
<hr />
<Button>Increase</Button>

{#each [...Array(50).keys()] as _}
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit eius! Commodi
		asperiores aliquid, ut ipsa et soluta laborum quas. Illo assumenda, doloribus quasi et aliquam
		quis ipsa non iusto.
	</p>
{/each}

<Center override={{ bc: '$blue50', height: 400 }}>
	<div use:io={options} on:change={handleChange}>
		{#if isInView}
			<img
				src="https://images.unsplash.com/photo-1653185053657-97c46dae8a12?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664"
				alt="stuff"
			/>
		{:else}
			<div class="placeholder" />
		{/if}
	</div>
</Center>

{#each [...Array(50).keys()] as _}
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit eius! Commodi
		asperiores aliquid, ut ipsa et soluta laborum quas. Illo assumenda, doloribus quasi et aliquam
		quis ipsa non iusto.
	</p>
{/each}

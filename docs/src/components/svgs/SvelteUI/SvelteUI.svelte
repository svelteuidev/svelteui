<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from './custom-transition';
	import { inner, outer } from './shape';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />
</svelte:head>

<div class="relative">
	<svg
		class="w-full h-full md:w-[130%] md:h-[130%] md:-translate-x-[10%]"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 103 124"
	>
		<g out:fade={{ duration: 200 }} opacity="0.7">
			<path
				in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
				style="stroke: #339AF0; fill: #339AF0; stroke-width: 50;"
				d={outer}
			/>
			<path in:draw={{ duration: 1000 }} style="stroke:#339AF0; stroke-width: 1.5" d={inner} />
		</g>
	</svg>

	<div
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide text-[5em] sm:text-[8em] md:text-[7vw] font-normal font-[Overpass]"
		out:fly={{ y: -20, duration: 300 }}
	>
		{#each 'SVELTEUI' as char, i}
			<span
				class="will-change-[filter] {i === 6 || i === 7
					? 'text-primary-600'
					: 'text-gray-400 dark:text-white'}"
				in:fade={{ delay: 1000 + i * 150, duration: 800 }}>{char}</span
			>
		{/each}
	</div>
</div>

<style>
	path {
		fill: white;
		opacity: 1;
	}
</style>

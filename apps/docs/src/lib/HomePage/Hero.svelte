<script lang="ts">
	// import { Button, Code } from '@svelteuidev/core/package';
	import SvelteUI from '$components/svgs/SvelteUI/SvelteUI.svelte';
	import Github from '$components/svgs/icons/Github.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible;

	onMount(() => {
		let screenW = window.innerWidth;
		visible = true;
		if (screenW < 770) {
			setTimeout(() => (visible = false), 3500);
		}
	});
</script>

<main class="flex flex-col-reverse max-w-screen-xl mx-auto px-5 md:flex-row md:gap-40">
	<section transition:slide class="flex flex-col justify-center items-start sm:mt-20 md:w-1/2">
		<h1 class="text-left text-4xl tracking-tighter font-sans font-bold sm:text-4xl lg:text-5xl">
			Create <span class="animate-text">fully functional</span> and accessible web applications in
			less time than ever before.
			<span class="text-primary-500">Regardless of design experience.</span>
		</h1>
		<h2 class="mt-5 w-full text-lg font-medium md:text-left">
			A variety of components, actions, and utility functions are on the way!
		</h2>
		<div class="mt-16 w-full flex flex-col gap-4 md:flex-row">
			<Button size="lg" href="/docs" variant="gradient" gradientTo="pink">Get Started</Button>
			<Button size="lg" href="https://github.com/Brisklemonade/svelteui" variant="default" external>
				<Github slot="leftIcon" />
				Source Code
			</Button>
		</div>
	</section>
	<section class="mt-20">
		{#if visible}
			<SvelteUI />
		{/if}
	</section>
</main>

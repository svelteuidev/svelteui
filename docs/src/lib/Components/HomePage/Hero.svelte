<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import SvelteUI from '$components/svgs/SvelteUI/SvelteUI.svelte';
	import Github from '$components/svgs/icons/Github.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	/** Variables & function to determine when to play the animation */
	let w: number;
	let visible: boolean = false;
	$: mobile = w < 768;
	function toggleVisibility() {
		if (!mobile) {
			visible = true;
		} else {
			window.scrollY > 280 ? (visible = true) : (visible = false);
		}
	}
	onMount(() => {
		!mobile ? toggleVisibility() : null;
	});
</script>

<svelte:window bind:innerWidth={w} on:scroll={mobile ? toggleVisibility : null} />
<main
	class="flex flex-col max-w-screen-xl mx-auto mt-24 px-5 space-y-14 md:flex-row md:gap-40 md:space-y-0"
>
	<section transition:slide class="flex flex-col justify-center items-start  md:w-1/2">
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
	<section>
		{#if visible}
			<SvelteUI />
		{:else}
			<div class="w-[335px] h-[403px]" />
		{/if}
	</section>
</main>

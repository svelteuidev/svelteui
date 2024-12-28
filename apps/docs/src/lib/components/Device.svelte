<script module lang="ts">
	import { writable, derived } from 'svelte/store';

	/**
	 * Tracks the screen height.
	 */
	export const screenH = writable(900);

	/**
	 * Tracks the screen width.
	 */
	export const screenW = writable(900);

	/**
	 * Adjusts the $mobile 'breakpoint' threshold.
	 */
	export const mobileThreshold = writable(800);

	/**
	 * Detects screen width below 900px
	 */
	export const mobile = derived(
		[screenW, mobileThreshold],
		([$screenW, $mobileThreshold]) => $screenW < $mobileThreshold
	);

	/**
	 * Tracks the users scroll position.
	 */
	export const scrollY = writable(0);

	/**
	 * Tracks the users mouse position.
	 * @param {number} x - The x position of the mouse.
	 * @param {number} y - The y position of the mouse.
	 */
	export const mouse = writable({ x: 0, y: 0 });

	const mouseMove = (e) => {
		mouse.update(() => ({ x: e.clientX, y: e.clientY }));
	};
</script>

<svelte:window
	onmousemove={(e) => mouseMove(e)}
	bind:innerHeight={$screenH}
	bind:innerWidth={$screenW}
	bind:scrollY={$scrollY}
/>

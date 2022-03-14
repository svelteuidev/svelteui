<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	let label: HTMLInputElement;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const docClassList = document.documentElement.classList;
		// Sets the label to a checked state on component mount if not in dark mode
		!docClassList.contains('dark') ? (label.checked = true) : undefined;
	});

	function toggleTheme() {
		const docClassList = document.documentElement.classList;
		if (docClassList.contains('dark') && !label.checked) {
			return null;
		}
		if (label.checked) {
			docClassList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			docClassList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
</script>

<label class="switch">
	<input
		on:click={toggleTheme}
		on:click={() => dispatch('toggle', label?.checked)}
		bind:this={label}
		type="checkbox"
		name="toggle"
	/>
	<span
		class="slider bg-slate-400 dark:bg-gradient-to-tr from-sky-500 to-emerald-400 before:bg-slate-200 dark:before:bg-[#1f212e]"
	/>
</label>

<style>
	/* Hide the browsers checkbox */
	input {
		display: none;
	}
	/* The oval around the slider */
	.switch {
		position: relative;
		width: 3.75rem;
		height: 2rem;
	}
	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		inset: 0;
		border-radius: 2rem;
	}
	/* The slider styles */
	.slider:before {
		content: '';
		position: absolute;
		height: 1.6rem;
		width: 1.6rem;
		left: 0.2rem;
		bottom: 0.2rem;
		transition: transform 0.5s ease;
		border-radius: 50%;
	}
	/* Changes background to linear gradient on hover */
	@media (hover: hover) {
		/* Brightens the oval on hover */
		@supports (filter: brightness()) {
			label:hover > .slider::before {
				filter: brightness(150%);
			}
		}
	}
	/* Moves the slider based on checked state */
	input:checked + .slider:before {
		transform: translateX(100%);
	}
</style>

<script lang="ts">
	import { css } from '@svelteuidev/core';

	/** Component Props*/
	export let title = 'Package/Title';
	export let description = 'This is the description for the package';

	/** Bind input element to value */
	let input: HTMLInputElement;

	/**
	 *  Theme only gets applied on page render
	 */
	const CardStyles = css({
		border: `1px solid $gray300`,
		borderRadius: '$sm',
		padding: '20px',
		backgroundColor: 'White',
		'&:hover': {
			backgroundColor: '$gray50'
		}
	});
</script>

<button
	on:click={() => {
		!input.checked ? (input.checked = true) : (input.checked = false);
	}}
	on:click
	class="flex w-full items-center gap-6 {CardStyles()}"
>
	<input
		bind:this={input}
		on:change
		class="min-w-[1.5rem] min-h-[1.5rem] bg-transparent dark:bg-dark-500  rounded-md"
		type="checkbox"
		tabindex="-1"
	/>
	<div>
		<div class="text-left text-base font-medium mb-1 text-black dark:text-dark-50">
			{title}
		</div>
		<div class="text-sm text-dark-300 text-left">
			{description}
		</div>
	</div>
</button>

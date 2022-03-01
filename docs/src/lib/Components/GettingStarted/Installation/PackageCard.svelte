<script lang="ts">
	import { css } from '@stitches/core';
	import { theme } from '@svelteuidev/core';

	/** Component Props*/
	export let title = 'Package/Title';
	export let description = 'This is the description for the package';

	/** Bind input element to value */
	let input: HTMLInputElement;

	/**
	 *  Theme only gets applied on page render
	 */
	const CardStyles = css({
		border: `1px solid ${
			$theme.colorScheme === 'dark' ? $theme.colors.dark[8] : $theme.colors.gray[3]
		}`,
		borderRadius: $theme.radius.sm,
		padding: $theme.spacing.lg,
		backgroundColor: $theme.colorScheme === 'dark' ? $theme.colors.dark[8] : $theme.white,

		'&:hover': {
			backgroundColor: $theme.colorScheme === 'dark' ? $theme.colors.dark[9] : $theme.colors.gray[0]
		}
	});
</script>

<button
	on:click={() => {
		!input.checked ? (input.checked = true) : (input.checked = false);
	}}
	class="flex w-full items-center gap-6 {CardStyles()}"
>
	<input
		bind:this={input}
		on:change
		class="w-6 h-6 bg-transparent dark:bg-dark-500  rounded-md"
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

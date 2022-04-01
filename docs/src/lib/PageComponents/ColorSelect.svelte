<script lang="ts">
	export let color = 'blue';

	let colors = [
		'dark',
		'gray',
		'red',
		'pink',
		'grape',
		'violet',
		'indigo',
		'blue',
		'cyan',
		'teal',
		'green',
		'lime',
		'yellow',
		'orange'
	];
</script>

<div class="flex flex-wrap gap-8 mt-5 py-8 px-4 shadow-md rounded-lg">
	{#each colors as _color}
		<label class="block relative pl-9 mb-3 cursor-pointer text-2xl select-none">
			<input
				class="absolute opacity-0 cursor-pointer"
				type="radio"
				bind:group={color}
				value={_color}
			/>
			<span
				style="--bg-color: {_color}"
				class="checkmark absolute top-0 left-0 h-8 w-8 rounded-md"
			/>
		</label>
	{/each}
</div>

<style>
	/* Create a custom radio button */
	.checkmark {
		background-color: var(--bg-color);
	}
</style>

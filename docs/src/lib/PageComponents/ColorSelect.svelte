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

	const getCorrectShade = (color) => {
		let _color: string;
		switch (color) {
			case 'blue':
				_color = '#228be6';
				return _color;
			case 'cyan':
				_color = '#15aabf';
				return _color;
			case 'dark':
				_color = '#25262b';
				return _color;
			case 'grape':
				_color = '#be4bdb';
				return _color;
			case 'gray':
				_color = '#868e96';
				return _color;
			case 'green':
				_color = '#40c057';
				return _color;
			case 'indigo':
				_color = '#4c6ef5';
				return _color;
			case 'lime':
				_color = '#82c91e';
				return _color;
			case 'orange':
				_color = '#fd7e14';
				return _color;
			case 'pink':
				_color = '#e64980';
				return _color;
			case 'red':
				_color = '#fa5252';
				return _color;
			case 'teal':
				_color = '#12b886';
				return _color;
			case 'violet':
				_color = '#7950f2';
				return _color;
			case 'yellow':
				_color = '#fab005';
				return _color;
			default:
				break;
		}
	};
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
				style="--bg-color: {getCorrectShade(_color)}"
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

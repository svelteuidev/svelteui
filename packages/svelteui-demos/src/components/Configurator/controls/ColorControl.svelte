<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import type * as Stitches from '@stitches/core';
	import type { DemoControlColor } from '$lib/types';
	import { InputWrapper, Group, css, dark } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	export let value: string;
	export let label: DemoControlColor['label'];

	const dispatch = createEventDispatcher();
	const listOfColors = [
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

	const colorStyles = css({
		focusRing: 'auto',
		border: 0,
		appearance: 'none',
		height: 25,
		cursor: 'pointer',
		display: 'block',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'rgb(255, 255, 255)',
		flexGrow: '1 !important',
		flexShrink: 0,
		flexBasis: 'calc(15% - 4px)',
		boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 0px 1px inset, rgb(0 0 0 / 15%) 0px 0px 4px inset',
		borderRadius: 4,
		position: 'relative',

		svg: {
			display: 'none',
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)'
		},

		'&.active svg': {
			display: 'block'
		},

		variants: {
			color: generateColorVariants()
		}
	});

	function generateColorVariants(): Stitches.VariantProps<any> {
		const variants: Stitches.VariantProps<any> = {};

		listOfColors.forEach((color) => {
			variants[color] = {
				background: `$${color}500`,

				[`.${dark} &`]: {
					background: `$${color}700`
				}
			};
		});

		return variants;
	}

	function changeValue(newValue: string) {
		value = newValue;
		dispatch('change', newValue);
	}
</script>

<InputWrapper {label}>
	<Group spacing={2}>
		{#each listOfColors as color}
			<button
				on:click={() => changeValue(color)}
				class:active={value === color}
				class={colorStyles({ color })}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style="width: 18px; height: 18px;"
					><path
						d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		{/each}
	</Group>
</InputWrapper>

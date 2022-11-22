<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { move } from './index';

	let moving = false;
	let position = { x: 0, y: 0 };

	function handleMoveStart() {
		moving = true;
	}
	function handleMove(event: { detail: { x: number; y: number } }) {
		position = event.detail;
	}
	function handleMoveStop() {
		moving = false;
	}
</script>

<Meta title="Composables/use-move" />

<Template let:args>
	<div
		use:move
		on:move:start={handleMoveStart}
		on:move={handleMove}
		on:move:stop={handleMoveStop}
		style="position: relative; width: 90%; height: 80vh; background-color: lightgrey; margin: 40px;"
	>
		<div
			style="position: absolute; cursor: pointer; background-color: red; width: 80px; height: 80px; left: calc({position.x *
				100}% - 40px); top: calc({position.y * 100}% - 40px);"
		/>
	</div>
	<div style="text-align: center; margin-top: 10px;">
		X: {position.x * 100}% Y: {position.y * 100}%
	</div>
</Template>

<Story name="use-move" />

<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<div
	use:move
	onmovestart={handleMoveStart}
	onmove={handleMove}
	onmovestop={handleMoveStop}
	style="position: relative; width: 90%; height: 200px; background-color: lightgrey; margin: 20px;"
>
	<div
		style="position: absolute; cursor: pointer; background-color: {moving
			? 'green'
			: 'red'}; width: 20px; height: 20px; left: calc({position.x *
			100}% - 10px); top: calc({position.y * 100}% - 10px);"
	/>
</div>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { move } from '@svelteuidev/composables';

	let moving = $state(false);
	let position = $state({ x: 0, y: 0 });
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

<div
	use:move
	onmovestart={handleMoveStart}
	onmove={handleMove}
	onmovestop={handleMoveStop}
	style="position: relative; width: 90%; height: 200px; background-color: lightgrey; margin: 20px;"
>
	<div
		style="position: absolute; cursor: pointer; background-color: {moving
			? 'green'
			: 'red'}; width: 20px; height: 20px; left: calc({position.x *
			100}% - 10px); top: calc({position.y * 100}% - 10px);"
	></div>
</div>
<div style="text-align: center; margin-top: 10px;">
	X: {position.x * 100}% Y: {position.y * 100}%
</div>

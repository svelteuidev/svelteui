<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Container } from '@svelteuidev/core';
	import { move } from './index';

	let moving = false;
	let position = { x: 0, y: 0 };

	function handlePanMove(event: { detail: { x: number; y: number } }) {
		position = event.detail;
	}
</script>

<Meta title="Composables/use-move" />

<!--
  @see https://github.com/sveltejs/language-tools/issues/431
  @see https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
-->
<Template let:args>
	<div use:move on:panmove={handlePanMove} style="position: relative;">
		<div
			style="position: absolute; background-color: red; width: 20px; height: 20px; left: {position.x *
				100}; top: {position.y * 100};"
		/>
	</div>
</Template>

<Story name="use-click-outside" />

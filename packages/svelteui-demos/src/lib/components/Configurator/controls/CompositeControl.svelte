<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import { ControlsRenderer } from './index';
	import type { DemoControlComposite } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { css, dark, InputWrapper } from '@svelteuidev/core';

	export let label: DemoControlComposite['label'];
	export let controls: DemoControlComposite['controls'];

	const dispatch = createEventDispatcher();

	let data: Record<string, any> = {};

	function onChange(newData) {
		data = newData;
		dispatch('change', newData);
	}

	const styles = css({
		borderLeft: '1px solid $gray200',
		paddingLeft: '$8',

		[`.${dark} &`]: {
			borderColor: '$gray800'
		}
	});
</script>

<InputWrapper {label}>
	<div class={styles()}>
		<ControlsRenderer value={data} {controls} {onChange} />
	</div>
</InputWrapper>

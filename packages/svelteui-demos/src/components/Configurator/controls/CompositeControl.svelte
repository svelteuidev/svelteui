<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import { ControlsRenderer } from './index';
	import type { DemoControlComposite } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { css, dark, InputWrapper } from '@svelteuidev/core';

	interface Props {
		label: DemoControlComposite['label'];
		controls: DemoControlComposite['controls'];
	}

	let { label, controls }: Props = $props();

	const dispatch = createEventDispatcher();

	let data: Record<string, any> = $state({});

	function onChange(newData) {
		data = newData.detail;
		dispatch('change', data);
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
		<ControlsRenderer value={data} {controls} on:change={onChange} />
	</div>
</InputWrapper>

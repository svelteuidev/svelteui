<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import { ControlsRenderer } from './index';
	import type { DemoControlComposite } from '$lib/types';
	import { css, dark, InputWrapper } from '@svelteuidev/core';

	interface Props {
		label: DemoControlComposite['label'];
		controls: DemoControlComposite['controls'];
		onchange: (value: any) => void;
	}

	let { label, controls, onchange }: Props = $props();

	let data: Record<string, any> = $state({});

	function onChange(newData) {
		data = newData.detail;
		onchange(newData.detail);
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
		<ControlsRenderer value={data} {controls} onchange={onChange} />
	</div>
</InputWrapper>

<script lang="ts">
	import { css } from '@svelteuidev/core';

	// @ts-ignore
	const IndexStyles = css({
		'& .spacing > :not([hidden]) ~ :not([hidden])': {
			marginTop: 'calc(3rem * calc(1 - 0))',
			marginBottom: 'calc(3rem * 0)'
		}
	});
</script>

<div class={IndexStyles()}>Contribution Guide</div>

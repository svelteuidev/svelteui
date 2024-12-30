<script lang="ts">
	import type { Animations, EasingOptions } from '../types';

	interface Props {
		animation?: Animations;
		duration?: number | string;
		easing?: EasingOptions;
		iterations?: string;
		children?: import('svelte').Snippet;
	}

	let {
		animation = 'spin',
		duration = $bindable(1),
		easing = 'linear',
		iterations = '',
		children
	}: Props = $props();

	$effect.pre(() => {
		duration = `${duration}s`;
	});
</script>

<div
	class={`animation-${animation}`}
	style="--duration: {duration}; --easing: {easing}; --iterations: {iterations};"
>
	<span>
		{@render children?.()}
	</span>
</div>

<style>
	.animation-spin {
		animation: spin var(--duration) var(--easing) infinite;
	}
	.animation-bounce {
		animation: bounce var(--duration) var(--easing) infinite;
	}
	.animation-ping {
		animation: ping var(--duration) var(--easing) infinite;
	}
	.animation-pulse {
		animation: pulse var(--duration) var(--easing) infinite;
	}
	.animation-float {
		animation: float var(--duration) var(--easing) infinite;
	}
	.animation-pulsate {
		animation: pulsate var(--duration) var(--easing) infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}

	@keyframes ping {
		0% {
			transform: scale(1);
			opacity: 1;
		}

		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0.5;
		}
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(4px);
		}
		70% {
			transform: translateY(-15px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes pulsate {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

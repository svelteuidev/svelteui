<script lang="ts">
	import type { TextAnimations, EasingOptions, Iterations, Gradient } from '../types';

	interface Props {
		animation?: TextAnimations;
		duration?: number | string;
		easing?: EasingOptions;
		iterations?: Iterations;
		optimalSettings?: boolean;
		gradient?: Gradient;
		children?: import('svelte').Snippet;
	}

	let {
		animation = 'hue',
		duration = $bindable(20),
		easing = $bindable('linear'),
		iterations = $bindable('infinite'),
		optimalSettings = true,
		gradient = { from: '#f35626', to: '#feab3a', deg: 92 },
		children
	}: Props = $props();

	$effect.pre(() => {
		duration = `${duration}s`;
	});
	$effect.pre(() => {
		if (optimalSettings) {
			if (animation === 'hue') {
				duration = 20;
				easing = 'linear';
				iterations = 'infinite';
			} else if (animation === 'flow') {
				duration = 4;
				easing = 'ease-in-out';
				iterations = 'infinite';
			}
		}
	});
</script>

<div
	class={`animation-${animation}`}
	style={`--duration: ${duration}s; --easing: ${easing}; --iterations: ${iterations}; --from: ${gradient.from}; --to: ${gradient.to}; --deg: ${gradient.deg}deg;`}
>
	{@render children?.()}
</div>

<style>
	.animation-hue {
		color: #228be6;
		background-clip: text;
		animation: hue var(--duration) var(--easing) var(--iterations);
		background-image: -webkit-linear-gradient(var(--deg), var(--from), var(--to));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-animation: hue var(--duration) var(--easing) var(--iterations);
	}
	.animation-flow {
		animation: flow var(--duration) var(--easing) var(--iterations);
		background: linear-gradient(-75deg, #7f7fd5, #e786d7);
		background-size: 200%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-animation: flow var(--duration) var(--easing) var(--iterations);
	}
	@keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}
	@keyframes flow {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 90% 75%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>

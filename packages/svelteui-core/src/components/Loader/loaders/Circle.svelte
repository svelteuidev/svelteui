<script lang="ts">
	import { useActions } from '$lib/internal';
	import type { LoaderProps } from '../Loader';

	interface Props {
		use?: LoaderProps['use'];
		size?: LoaderProps['size'];
		color?: LoaderProps['color'];
		class?: LoaderProps['className'];
	}

	let {
		use = [],
		size = 25,
		color = 'blue',
		class: className = ''
	}: Props = $props();
	
</script>

<svg
	width={`${size}px`}
	height={`${size}px`}
	viewBox="0 0 38 38"
	xmlns="http://www.w3.org/2000/svg"
	stroke={color}
	class={className}
	use:useActions={use}
>
	<g fill="none" fill-rule="evenodd">
		<g transform="translate(2.5 2.5)" stroke-width="5">
			<circle stroke-opacity=".5" cx="16" cy="16" r="16" />
			<path d="M32 16c0-9.94-8.06-16-16-16">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 16 16"
					to="360 16 16"
					dur="1s"
					repeatCount="indefinite"
				/>
			</path>
		</g>
	</g>
</svg>

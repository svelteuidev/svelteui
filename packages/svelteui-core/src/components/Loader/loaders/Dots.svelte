<script lang="ts">
	import { useActions } from '$lib/internal';
	import type { LoaderProps } from '../Loader';

	export let use: LoaderProps['use'] = [];
	export let size: LoaderProps['size'] = 25;
	export let color: LoaderProps['color'] = 'blue';
	export let className: LoaderProps['className'] = '';
	export { className as class };
</script>

<svg
	width={`${size}px`}
	height={`${Number(size) / 4}px`}
	viewBox="0 0 120 30"
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	class={className}
	use:useActions={use}
>
	<circle cx="15" cy="15" r="15">
		<animate
			attributeName="r"
			from="15"
			to="15"
			begin="0s"
			dur="0.8s"
			values="15;9;15"
			calcMode="linear"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="fill-opacity"
			from="1"
			to="1"
			begin="0s"
			dur="0.8s"
			values="1;.5;1"
			calcMode="linear"
			repeatCount="indefinite"
		/>
	</circle>
	<circle cx="60" cy="15" r="9" fill-opacity="0.3">
		<animate
			attributeName="r"
			from="9"
			to="9"
			begin="0s"
			dur="0.8s"
			values="9;15;9"
			calcMode="linear"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="fill-opacity"
			from="0.5"
			to="0.5"
			begin="0s"
			dur="0.8s"
			values=".5;1;.5"
			calcMode="linear"
			repeatCount="indefinite"
		/>
	</circle>
	<circle cx="105" cy="15" r="15">
		<animate
			attributeName="r"
			from="15"
			to="15"
			begin="0s"
			dur="0.8s"
			values="15;9;15"
			calcMode="linear"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="fill-opacity"
			from="1"
			to="1"
			begin="0s"
			dur="0.8s"
			values="1;.5;1"
			calcMode="linear"
			repeatCount="indefinite"
		/>
	</circle>
</svg>

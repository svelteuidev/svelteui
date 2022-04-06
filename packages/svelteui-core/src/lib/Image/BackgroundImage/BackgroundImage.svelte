<script lang="ts">
	import { css } from '$lib/_styles';
	import type { Override, SvelteuiNumberSize } from '$lib/_styles';

	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** Predefined radius size from theme or number to set border-radius in px */
	export let radius: SvelteuiNumberSize | number = 0;
	/** The image src to be used */
	export let src: string = '';
	/** The width of the image that defaults to 100% */
	export let width: string | number = undefined;
	/** The height of the image that defaults to the original image height adjusted to the width */
	export let height: string | number = undefined;

	const BackgroundImageStyles = css({
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'block',
		width: width !== undefined ? width : 'auto',
		height: height !== undefined ? height : 'auto',
		border: 0,
		textDecoration: 'none',
		color: 'White',
		backgroundImage: `url(${src})`,
		borderRadius: typeof radius === 'string' ? `$${radius}` : radius,
		padding: '16px'
	});
</script>

<div class={BackgroundImageStyles({ css: override })}>
	<slot>Text</slot>
</div>

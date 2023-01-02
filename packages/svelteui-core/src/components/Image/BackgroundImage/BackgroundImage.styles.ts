import { createStyles } from '$lib/styles';

export interface BackgroundImageStyleParams {
	width?: string | number;
	height?: string | number;
	radius: string | number;
	src: string;
}

export default createStyles((_, { height, width, radius, src }: BackgroundImageStyleParams) => {
	return {
		root: {
			focusRing: 'auto',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: 'block',
			width: width !== undefined ? `${width}%` : 'auto',
			height: height !== undefined ? `${height}%` : 'auto',
			border: 0,
			textDecoration: 'none',
			color: 'White',
			backgroundImage: `url(${src})`,
			borderRadius: typeof radius === 'string' ? `$${radius}` : radius,
			padding: '16px'
		}
	};
});

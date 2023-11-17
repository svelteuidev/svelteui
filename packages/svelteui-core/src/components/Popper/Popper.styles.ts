import { createStyles } from '$lib/styles-old';

export interface PopperStyleParams {
	arrowSize: number;
	zIndex: number;
}

export function calculateArrowPlacement(arrowSize, arrowDistance, position, placement) {
	switch (position) {
		case 'top':
			return {
				top: 'unset',
				bottom: `${-1 * arrowSize}px`,
				left: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				right: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'bottom':
			return {
				top: `${-1 * arrowSize}px`,
				bottom: 'unset',
				left: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				right: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'left':
			return {
				right: `${-1 * arrowSize}px`,
				left: 'unset',
				top: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				bottom: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'right':
			return {
				right: 'unset',
				left: `${-1 * arrowSize}px`,
				top: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				bottom: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
	}
}

export default createStyles((_, { arrowSize, zIndex }: PopperStyleParams) => {
	return {
		root: {
			position: 'absolute',
			zIndex: zIndex
		},
		arrowStyles: {
			width: arrowSize * 2,
			height: arrowSize * 2,
			position: 'absolute',
			transform: 'rotate(45deg)',
			border: '1px solid transparent',
			zIndex: zIndex
		}
	};
});

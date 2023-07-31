import { rem } from '../../../utils/rem/rem';

export function cover(offset: number | string = 0) {
	return {
		position: 'absolute',
		top: rem(offset),
		right: rem(offset),
		left: rem(offset),
		bottom: rem(offset)
	};
}

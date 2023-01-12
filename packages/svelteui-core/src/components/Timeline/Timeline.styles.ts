import { createStyles } from '$lib/styles';

export interface TimelineStyleParams {
	align?: 'left' | 'right';
	bulletSize?: number;
	lineWidth?: number;
}

export default createStyles((_, { align, bulletSize, lineWidth }: TimelineStyleParams) => {
	return {
		root: {
			paddingLeft: align === 'left' ? bulletSize / 2 + lineWidth / 2 : 0,
			paddingRight: align === 'left' ? 0 : bulletSize / 2 + lineWidth / 2
		}
	};
});

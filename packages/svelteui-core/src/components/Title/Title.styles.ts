import { createStyles } from '$lib/styles';

export const titleSizes = {
	1: {
		fontSize: 34,
		lineHeight: 1.3
	},
	2: {
		fontSize: 26,
		lineHeight: 1.35
	},
	3: {
		fontSize: 22,
		lineHeight: 1.4
	},
	4: {
		fontSize: 18,
		lineHeight: 1.45
	},
	5: {
		fontSize: 16,
		lineHeight: 1.5
	},
	6: {
		fontSize: 14,
		lineHeight: 1.5
	}
};

export default createStyles(() => {
	return {
		root: {
			margin: 0
		}
	};
});

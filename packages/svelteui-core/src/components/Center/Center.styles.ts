import { createStyles } from '$lib/styles-old';

export interface CenterStyleParams {
	inline: boolean;
}

export default createStyles((_, { inline }: CenterStyleParams) => {
	return {
		root: {
			display: inline ? 'inline-flex' : 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	};
});

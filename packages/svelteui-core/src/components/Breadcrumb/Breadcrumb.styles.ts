import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize, SvelteUIColor } from '$lib/styles';

export const sizes = {
	xs: 3,
	sm: 5,
	md: 8,
	lg: 12,
	xl: 16
};

export default createStyles(() => ({
	root: {
		position: 'relative',
		display: 'flex'
	}
}));

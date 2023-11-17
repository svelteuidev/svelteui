import { createStyles } from '$lib/styles-old';
import type { SvelteUINumberSize } from '$lib/styles-old';
import type { AccordionVariant } from './Accordion';

export interface AccordionStylesParams {
	radius: SvelteUINumberSize;
	variant: AccordionVariant;
}

export default createStyles((theme, { radius, variant }: AccordionStylesParams) => {
	return {
		root: {}
	};
});

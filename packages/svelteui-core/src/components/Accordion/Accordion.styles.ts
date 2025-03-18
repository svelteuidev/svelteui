import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';
import type { AccordionVariant } from './Accordion';

export interface AccordionStylesParams {
	radius: SvelteUINumberSize;
	variant: AccordionVariant;
}

export default createStyles((_, _params: AccordionStylesParams) => {
	return {
		root: {}
	};
});

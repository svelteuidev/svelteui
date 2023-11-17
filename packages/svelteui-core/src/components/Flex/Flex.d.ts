import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps } from '$lib/styles-old';

export interface FlexProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	gap?: CSS['gap'];
	rowGap?: CSS['rowGap'];
	columnGap?: CSS['columnGap'];
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
	wrap?: CSS['flexWrap'];
	direction?: CSS['flexDirection'];
}

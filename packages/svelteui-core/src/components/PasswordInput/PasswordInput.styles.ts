import { getSize, rem, type SvelteUISize } from '$lib/styles-old';

export function getButtonSize(size: SvelteUISize) {
	const sizes = {
		xs: rem(22),
		sm: rem(26),
		md: rem(28),
		lg: rem(32),
		xl: rem(40)
	};

	return getSize({ size, sizes });
}

export function getIconSize(size: SvelteUISize) {
	const sizes = {
		xs: rem(12),
		sm: rem(15),
		md: rem(17),
		lg: rem(19),
		xl: rem(21)
	};

	return getSize({ size, sizes });
}

export function getRightSectionWidth(size: SvelteUISize) {
	const sizes = {
		xs: rem(28),
		sm: rem(32),
		md: rem(34),
		lg: rem(44),
		xl: rem(54)
	};

	return getSize({ size, sizes });
}

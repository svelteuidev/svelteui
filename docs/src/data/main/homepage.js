import { Accessibility, StitchesLogo } from 'radix-icons-svelte';
import TypeScript from '../../components/svgs/TypeScript.svelte';

export const features = [
	{
		icon: TypeScript,
		title: 'Typescript Based',
		description:
			'Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default. All components and functions export types, are documented, and give developers autocomplete features!'
	},
	{
		icon: StitchesLogo,
		title: 'Built with stitches',
		description:
			'CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Colors, fonts, shadows and many other parts are customizable to fit your design needs.'
	},
	{
		icon: Accessibility,
		title: 'Accessibility and usability',
		description:
			'All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus ring. It will appear only when user navigates with keyboard'
	}
];

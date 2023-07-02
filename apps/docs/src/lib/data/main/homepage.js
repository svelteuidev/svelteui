import { Accessibility, Dashboard, Box as BoxIcon } from 'radix-icons-svelte';
import TypeScript from '../../components/svgs/TypeScript.svelte';
import {
	Container,
	Center,
	Collapse,
	SimpleGrid,
	Stack,
	Group,
	ActionIcon,
	AspectRatio,
	Flex,
	Button,
	Checkbox,
	Input,
	InputWrapper,
	NativeSelect,
	Switch,
	Badge,
	Image,
	ThemeIcon,
	Loader,
	Code,
	Text,
	Textarea,
	TextInput,
	Title,
	Box
} from '@svelteuidev/core';

export const features = [
	{
		icon: TypeScript,
		title: 'Typescript Based',
		description:
			'Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default. All components and functions export types, are documented, and give developers autocomplete features!'
	},
	{
		icon: Dashboard,
		title: 'Feature packed',
		description:
			'SvelteUI contains more than just components. With Actions, Transitions, and Utilities available to you, development will be fun and easy!'
	},
	{
		icon: Accessibility,
		title: 'Accessible and usable',
		description:
			'All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus ring. It will appear only when user navigates with keyboard'
	}
];

export const components = [
	{
		icon: BoxIcon,
		component: Button,
		link: 'core/button',
		title: 'Button',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Input,
		link: 'core/input',
		title: 'Input',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Container,
		link: 'core/container',
		title: 'Container',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: AspectRatio,
		link: 'core/aspect-ratio',
		title: 'AspectRatio',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Center,
		link: 'core/center',
		title: 'Center',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Flex,
		link: 'core/flex',
		title: 'Flex',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: SimpleGrid,
		link: 'core/simple-grid',
		title: 'SimpleGrid',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Container,
		link: 'core/space',
		title: 'Space',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Stack,
		link: 'core/stack',
		title: 'Stack',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Group,
		link: 'core/group',
		title: 'Group',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: ActionIcon,
		link: 'core/action-icon',
		title: 'ActionIcon',
		color: '$blue600',
		content: '+'
	},
	{
		icon: BoxIcon,
		component: Checkbox,
		link: 'core/checkbox',
		title: 'Checkbox',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: InputWrapper,
		link: 'core/input-wrapper',
		title: 'InputWrapper',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: TextInput,
		link: 'core/text-input',
		title: 'TextInput',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Textarea,
		link: 'core/textarea',
		title: 'Textarea',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: NativeSelect,
		link: 'core/native-select',
		title: 'NativeSelect',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Switch,
		link: 'core/switch',
		title: 'Switch',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Badge,
		link: 'core/badge',
		title: 'Badge',
		color: '$blue600',
		content: 'BETA'
	},
	{
		icon: BoxIcon,
		component: Image,
		link: 'core/image',
		title: 'Image',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: ThemeIcon,
		link: 'core/theme-icon',
		title: 'ThemeIcon',
		color: '$blue600',
		content: '+'
	},
	{
		icon: BoxIcon,
		component: Loader,
		link: 'core/loader',
		title: 'Loader',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Container,
		link: 'core/overlay',
		title: 'Overlay',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Code,
		link: 'core/code',
		title: 'Code',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Text,
		link: 'core/text',
		title: 'Text',
		color: '$blue600'
	},
	{
		icon: BoxIcon,
		component: Title,
		link: 'core/title',
		title: 'Title',
		color: '$blue600',
		content: 'Enter some text'
	},
	{
		icon: BoxIcon,
		component: Box,
		link: 'core/box',
		title: 'Box',
		color: '$blue600',
		content: 'Read about me'
	},
	{
		icon: BoxIcon,
		component: Collapse,
		link: 'core/collapse',
		title: 'Collapse',
		color: '$blue600',
		content: 'Read about me'
	}
];

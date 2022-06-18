<script lang="ts">
	import {
		ActionIcon,
		Affix,
		Anchor,
		BackgroundImage,
		Badge,
		Box,
		BrowserRender,
		Burger,
		Button,
		Card,
		Center,
		Checkbox,
		CloseButton,
		Code,
		Container,
		Divider,
		Fragment,
		Group,
		Image,
		Input,
		InputWrapper,
		Kbd,
		Loader,
		MediaQuery,
		Modal,
		NativeSelect,
		NumberInput,
		ObserverRender,
		Overlay,
		Paper,
		Popper,
		Portal,
		Seo,
		ServerRender,
		SimpleGrid,
		Skeleton,
		Space,
		Stack,
		Switch,
		Text,
		TextInput,
		ThemeIcon,
		Title,
		Tooltip,
		TypographyProvider,
		UnstyledButton,
		createStyles,
		useSvelteUITheme,
		useSvelteUIThemeContext,
		rgba
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
	import { GithubLogo } from 'radix-icons-svelte';
	import type { SvelteUITheme, SvelteUIThemeOverride } from '$lib/styles';
	import { getContext } from 'svelte';

	function mergeTheme(
		currentTheme: SvelteUITheme,
		themeOverride?: SvelteUIThemeOverride
	): Omit<SvelteUITheme, 'fn' | 'dark'> {
		if (!themeOverride) {
			return currentTheme;
		}

		return Object.keys(currentTheme).reduce((acc, key) => {
			acc[key] =
				typeof themeOverride[key] === 'object'
					? { ...currentTheme[key], ...themeOverride[key] }
					: typeof themeOverride[key] === 'number'
					? themeOverride[key]
					: themeOverride[key] || currentTheme[key];
			return acc;
		}, {} as SvelteUITheme);
	}

	// export function mergeThemeWithFunctions(
	// 	currentTheme: SvelteUITheme,
	// 	themeOverride?: SvelteUIThemeOverride
	// ): SvelteUITheme {
	// 	return attachFunctions(mergeTheme(currentTheme, themeOverride));
	// }

	const theme = useSvelteUIThemeContext().theme;

	const highlight = {
		backgroundColor:
			theme.colorScheme === 'dark'
				? rgba(theme.fn.themeColor('blue', 7), 0.25)
				: theme.fn.themeColor('blue', 0),
		border: `1px solid ${theme.fn.themeColor('blue', 6)}`
	};

	const boxStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};
</script>

<Group direction="column" spacing={5}>
	<MediaQuery largerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- larger than lg</Box>
	</MediaQuery>
	<!-- <MediaQuery smallerThan="lg" styles={highlight}>
		<Box css={boxStyles}>- Smaller than lg</Box>
	</MediaQuery>
	<MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
		<Box css={boxStyles}>- Smaller than xl, larger than sm</Box>
	</MediaQuery>
	<MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
		<Box css={boxStyles}>- Smaller than 1500px, larger than 800px</Box>
	</MediaQuery> -->
</Group>

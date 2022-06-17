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
		useSvelteUIThemeContext
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

		// @ts-ignore
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
</script>

<Button>Hello World</Button>

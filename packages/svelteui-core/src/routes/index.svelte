<script lang="ts">
	import {
		ActionIcon,
		Affix,
		Alert,
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
		Grid,
		Group,
		Image,
		Input,
		InputWrapper,
		Kbd,
		Loader,
		MediaQuery,
		Menu,
		Modal,
		NativeSelect,
		Notification,
		NumberInput,
		ObserverRender,
		Overlay,
		Paper,
		Popper,
		Portal,
		Progress,
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
		Timeline,
		Title,
		Tooltip,
		TypographyProvider,
		UnstyledButton,
		createStyles,
		useSvelteUITheme,
		useSvelteUIThemeContext,
		colors
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
</script>

<Menu trigger="hover">
	<Menu.Label>Application</Menu.Label>
	<Menu.Item icon={Gear}>Settings</Menu.Item>
	<Menu.Item icon={Gear}>Settings</Menu.Item>
	<Menu.Item icon={Gear}>Settings</Menu.Item>
</Menu>

<Box
	css={(theme) => {
		return {
			bc: theme.colors.grape600.value,
			size: 200,
			outline: '$pink600',
			'@lg': { color: '$blue600' }
		};
	}}
/>

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

	let value = 20;
</script>

<Progress {value} />
<Space h="md" />
<Group>
	<Button on:click={() => (value += 10)}>Increase</Button>
	<Button on:click={() => (value -= 10)}>Decrease</Button>
</Group>

<script lang="ts">
	import {
		ActionIcon,
		Affix,
		Anchor,
		BackgroundImage,
		Burger,
		Button,
		Checkbox,
		CloseButton,
		Code,
		Divider,
		Image,
		Loader,
		Switch,
		Text,
		Title,
		Box,
		Stack,
		Group,
		Center,
		Space,
		Badge,
		ThemeIcon,
		Popper,
		Input,
		InputWrapper,
		NativeSelect,
		NumberInput,
		Fragment,
		Overlay,
		SimpleGrid,
		Container,
		Tooltip,
		Kbd,
		Paper,
		TypographyProvider,
		ObserverRender,
		Skeleton,
		Card,
		Seo,
		fns,
		createStyles,
		colorScheme
	} from '$lib';
	import Gear from '../icons/Gear.svelte';

	let opened = false;
</script>

<Center>
	<Burger {opened} on:click={() => (opened = !opened)} />
	Hello
</Center>

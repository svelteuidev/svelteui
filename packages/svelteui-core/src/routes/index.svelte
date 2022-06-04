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
		createStyles
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
	import { GithubLogo } from 'radix-icons-svelte';

	let ref;
	let mounted = true;
</script>

<Button bind:element={ref} on:click={() => mounted = !mounted }>Click here</Button>
<Popper
	reference={ref}
	placement="center"
	position="bottom"
	{mounted}
	withArrow={true}
	arrowOverride={{ backgroundColor: '$gray100' }}
>
	<Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
		<Center css={{ width: 100 }}>
			<Text>This is a very long text</Text>
		</Center>
	</Box>
</Popper>
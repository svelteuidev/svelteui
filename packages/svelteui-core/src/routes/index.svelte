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

	const useStyles = createStyles((theme, _params, getRef) => {
		return {
			button: {
				// assign reference to selector
				ref: getRef('button'),

				// and add any other properties
				backgroundColor: theme.colors.blue600.value,
				color: theme.colors.white.value,
				padding: `$smPX $lgPX`,
				borderRadius: theme.radii.md.value,
				cursor: 'pointer',
				border: 0
			},
			root: {
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: theme.colors.gray100.value,
				padding: +theme.space.xl.value,

				// reference button with nested selector
				[`&:hover .${getRef('button')}`]: {
					backgroundColor: theme.colors.violet600.value
				}
			}
		};
	});

	$: ({ getStyles, classes } = useStyles());
</script>

<div class={getStyles()}>
	<button class={classes.button} type="button"> Hover container to change button color </button>
</div>

<Card>
	<Card.Section>First Child</Card.Section>
	<div>Second Child</div>
	<div>Third Child</div>
	<Card.Section>First Child</Card.Section>
</Card>

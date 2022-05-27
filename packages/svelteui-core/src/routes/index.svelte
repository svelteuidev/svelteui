<script lang="ts">
	import { portal } from '@svelteuidev/actions';
	import {
		ActionIcon,
		Anchor,
		BackgroundImage,
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
		clipboard
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
</script>

<NumberInput />
<NumberInput step={0.2} precision={2} />
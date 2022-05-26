<script lang="ts">
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
		Seo,
		fns,
		theme
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
</script>

<Box>
	<Skeleton height={50} circle override={{ mb: '$10' }} />
	<Skeleton height={8} radius="xl" />
	<Skeleton height={8} override={{ mt: 6 }} radius="xl" />
	<Skeleton height={8} override={{ mt: 6 }} width={70} radius="xl" />
</Box>
<Space h={100} />
<Skeleton visible={true}>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi iste repudiandae commodi
	fugiat explicabo recusandae? Numquam voluptates provident voluptatem inventore molestiae
	repudiandae perferendis in quos, ipsum aliquid quisquam. Eum, hic!
</Skeleton>

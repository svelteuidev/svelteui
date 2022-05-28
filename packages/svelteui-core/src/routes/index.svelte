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

	let value = 0;
</script>

Normal with default value 10
<NumberInput defaultValue={10} />
No controls
<NumberInput hideControls={true} />
With step, precision and decimal separator and binded value of: {value}
<NumberInput step={0.2} precision={2} decimalSeparator="," bind:value={value} />
With a given formatter and parser
<NumberInput
	defaultValue={1000}
	parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
	formatter={(value) =>
	  !Number.isNaN(parseFloat(value))
		? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		: '$ '
	} />
With max 10 and min 0 with step 0.5 and precision 1
<NumberInput max={10} min={0} step={0.5} precision={1} />
Invalid
<NumberInput invalid={true} stepHoldDelay={1000}  />
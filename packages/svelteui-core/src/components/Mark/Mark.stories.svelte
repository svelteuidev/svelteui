<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Mark } from './index';
	import Text from '../Text/Text.svelte';
</script>

<Meta title="Components/Mark" component={Mark} />

<Story name="Mark" id="markStory">
	<Text>
		Here's some random text with a
		<Mark>highlight</Mark> in it.
	</Text>
</Story>

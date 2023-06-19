<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { AspectRatio } from './index';
	import { Image } from '../Image';
</script>

<Meta title="Components/AspectRatio" component={AspectRatio} />

<Template let:args>
	<AspectRatio {...args} />
</Template>

<Story name="Div" id="aspectRatioDivStory">
	<AspectRatio ratio={16 / 2}>
		<div style="background-color: purple;">AspectRatio</div>
	</AspectRatio>
</Story>

<Story name="Image" id="aspectRatioImageStory">
	<AspectRatio ratio={18 / 9}>
		<Image
			height="100%"
			src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
			alt="Panda"
		/>
	</AspectRatio>
</Story>

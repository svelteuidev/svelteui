<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Loader } from './index';
</script>

<Meta title="Components/Loader" component={Loader} />

<Template >
	{#snippet children({ args })}
		<Loader {...args} />
	{/snippet}
</Template>

<Story name="Default" id="loaderStory" />

<Story name="Variants" id="loaderVariantsStory">
	<Loader variant="circle" />
	<Loader variant="dots" />
	<Loader variant="bars" />
</Story>

<Story name="Colors" id="loaderColorsStory">
	<Loader color="red" />
	<Loader color="green" />
	<Loader color="teal" />
	<Loader color="gray" />
	<Loader color="blue" />
	<Loader color="yellow" />
</Story>

<Story name="Size" id="loaderSizeStory">
	<Loader size="xs" />
	<Loader size="lg" />
	<Loader size={50} />
	<Loader size={200} />
</Story>

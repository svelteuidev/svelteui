<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Image } from './index';
	import { Center } from '../Center';

	const url =
		'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=720&q=80';
</script>

<Meta title="Components/Image" component={Image} />

<Template>
	{#snippet children({ args })}
		<Center>
			<Image radius="md" src={url} alt="Random unsplash image" {...args} />
		</Center>
	{/snippet}
</Template>

<Story name="Default" id="imageStory" />

<Story name="Override" id="imageOverrideStory" args={{ override: { pointerEvents: 'none' } }} />

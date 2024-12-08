<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Image } from './index';
	import { Center } from '../Center';
	import { createStyles } from '../../styles';

	const url =
		'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=720&q=80';

	const useStyles = createStyles(() => ({
		root: {
			'& img': {
				pointerEvents: 'none',
				'user-drag': 'none',
				'user-select': 'none'
			}
		}
	}));

	let { getStyles } = $derived(useStyles());
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

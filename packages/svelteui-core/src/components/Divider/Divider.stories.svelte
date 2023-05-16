<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Box } from '../Box';
	import { Divider } from './index';
</script>

<Meta title="Components/Divider" component={Divider} />

<Template>
	<Divider label="Label on the left" labelPosition="left" />
	<Divider label="Label in the center" labelPosition="center" />
	<Divider label="Label on the right" labelPosition="right" />
</Template>

<Story name="Divider" id="dividerStory" />

<Story name="Vertical" id="dividerVerticalStory">
	<Box css={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
		<Divider orientation="vertical" />
	</Box>
</Story>

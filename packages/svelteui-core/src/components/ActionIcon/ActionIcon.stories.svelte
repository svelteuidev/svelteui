<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { ActionIcon } from './index';
</script>

<Meta title="Components/ActionIcon" component={ActionIcon} />

<Template let:args>
	<ActionIcon {...args} />
</Template>

<Story name="ActionIcon" id="actionIconStory" />

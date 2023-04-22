<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Switch } from './index';
</script>

<Meta title="Components/Switch" component={Switch} />

<Template let:args>
	<Switch {...args} />
</Template>

<Story name="Switch" id="switchStory" />

<Story name="Disabled" id="switchDisabledStory">
	<Switch disabled />
</Story>

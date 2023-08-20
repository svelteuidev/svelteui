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

<Story
	name="With label"
	id="switchLabelStory"
	args={{ label: 'I would like to receive annoying notifications ' }}
/>

<Story
	name="With inside label"
	id="switchInsideLabelStory"
	args={{ size: 'md', onLabel: 'ON', offLabel: 'OFF' }}
/>

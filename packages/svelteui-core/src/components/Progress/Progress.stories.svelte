<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Progress } from './index';
</script>

<Meta title="Components/Progress" component={Progress} />

<Template let:args>
	<Progress {...args} />
</Template>

<Story name="Menu" id="progressStory" args={{ value: 40 }}/>

<Story name="Sections" id="progressSectionsStory">
	<Progress
        size="xl"
        sections={[
            { value: 40, color: 'cyan' },
            { value: 20, color: 'blue' },
            { value: 15, color: 'indigo' }
        ]}
    />
</Story>


<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Blah from './Blah.svelte';
</script>

<Meta title="Components/Form" component={Blah} />

<Template let:args>
	<Blah {...args} />
</Template>

<Story name="Blah" id="blahStory" />

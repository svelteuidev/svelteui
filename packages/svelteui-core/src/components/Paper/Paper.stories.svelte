<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Paper } from './index';
</script>

<Meta title="Components/Paper" component={Paper} />

<Template let:args>
  <Paper>
    Paper is the most basic UI component. Use it to create cards, dropdowns, modals and other components that require background with shadow
  </Paper>
</Template>

<Story name="Paper" id="paperStory" />

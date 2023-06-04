<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from '../Button';
	import { Paper } from '../Paper';
	import { Collapse } from './index';

  let open = false;
</script>

<Meta title="Components/Collapse" component={Collapse} />

<Template let:args>
  <Button on:click={() => { open = !open }}>Toggle collapse text</Button>

  <Collapse {open} {...args}>
    <Paper>This is a hidden text!</Paper>
  </Collapse>

  <div>This is a cool text!</div>
</Template>

<Story name="Collapse" id="collapseStory" />

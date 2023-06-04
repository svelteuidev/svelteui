<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from '../Button';
	import { Paper } from '../Paper';
	import { Collapse } from './index';

  let open = false;
  let openInside = false;
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

<Story name="Nested Collapse" id="collapseNestedStory">
  <Button on:click={() => { open = !open }}>Toggle collapse</Button>

  <Collapse {open}>
    <Paper>
      Please click below to toggle a nested collapse!
      <Button on:click={() => { openInside = !openInside }}>Toggle nested collapse</Button>

      <Collapse open={openInside}>
        <Paper>This is a very hidden text, sshhhh!</Paper>
      </Collapse>
    </Paper>
  </Collapse>

  <div>Footer text</div>
</Story>

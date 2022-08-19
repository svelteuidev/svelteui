<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { Button, Paper } from '@svelteuidev/core';
  import { clickoutside } from './index';

  let open = true;
</script>

<Meta title="Composables/use-click-outside" />

<Template let:args>
	<div use:clickoutside={{ enabled: open, callback: () => open = false }}>
      <Button on:click={() => open = true}>Open Modal</Button>
      {#if open}
          <Paper shadow='sm'>
              This is a modal, click anywhere to close
          </Paper>
      {/if}
  </div>
</Template>

<Story name="use-click-outside" />

<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { Chip } from './index';
  import { Group } from '../Group';
  import {Stack} from "../Stack";
  import { useSvelteUITheme } from '$lib/styles';

  const theme = useSvelteUITheme();
  const colors = Object.keys(theme.colorNames);

</script>

<Meta title="Components/Chip" component={Chip} />

<Template let:args>
  <Chip {...args} ></Chip>
</Template>

<Story name="Chip" />

<Story name="Colors">
  <div class="{theme.colorScheme}">
  <Stack>
    <Group>
      <Chip>Default chip</Chip>
      <Chip color="green" variant="filled">Filled chip</Chip>
      <Chip color="red" variant="outline" checked>Outline chip</Chip>
      <Chip disabled>Disabled chip</Chip>
      <Chip checked disabled>Checked disabled chip</Chip>
      <Chip size="xl">Large chip</Chip>
    </Group>
    {#each colors as color}
      <Group>
        <Chip {color} variant="filled" checked>Filled {color} chip</Chip>
        <Chip {color} variant="outline" checked>Outlined {color} chip</Chip>
      </Group>
    {/each}
  </Stack>
  </div>
</Story>

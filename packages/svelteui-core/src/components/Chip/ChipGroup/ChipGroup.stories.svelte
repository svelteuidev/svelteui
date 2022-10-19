<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { ChipGroup } from '../index';

  let bindValue // used for testing bind:value
</script>

<Meta title="Components/Chip/ChipGroup" component={ChipGroup} />

<Template let:args>
  <ChipGroup {...args}></ChipGroup>
</Template>

<Story name="ChipGroup" args={{items:[{label:'Chip', value: 'chip'},{label:'Dip', value: 'dip'}]}}/>

<Story name="Bind value">
  <ChipGroup bind:value={bindValue} items={[{label: 'One', value: 1},{label: 'Two', value: 2},{label: 'Three', value: 3}]} />
  <p>Variable bound to value: <code>{JSON.stringify(bindValue)}</code></p>
</Story>

<Story name="Spacing">
  {#each ['xs', 'sm', 'md', 'lg', 'xl'] as spacing}
    <p>Spacing: {spacing}</p>
    <ChipGroup bind:value={bindValue} {spacing} items={[{label: 'One', value: 1},{label: 'Two', value: 2},{label: 'Three', value: 3}]} />
  {/each}
</Story>

<Story name="Directions">
  {#each ['row', 'column'] as direction}
    <p>Direction: {direction}</p>
    <ChipGroup bind:value={bindValue} {direction} items={[{label: 'One', value: 1},{label: 'Two', value: 2},{label: 'Three', value: 3}]} />
  {/each}
</Story>

<Story name="Input label">
  <ChipGroup bind:value={bindValue} label="Pick as many as you like" description="You can select more than one"
             items={[{label: 'One', value: 1},{label: 'Two', value: 2},{label: 'Three', value: 3}]} />
</Story>

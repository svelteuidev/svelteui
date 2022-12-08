<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button, Text, Title, NativeSelect, TextInput } from '@svelteuidev/core';
  import { focustrap } from './use-focus-trap';
</script>

<Meta title="Composables/use-focus-trap" />

<Template let:args>
  <div use:focustrap>
    <Title>Form</Title>
    <Text>Please fill out this form</Text>
    <TextInput
      placeholder="Your name"
      label="Full name"
    />
    <NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
      placeholder="Pick one"
      label="Select your favorite framework/library"
      description="This is anonymous"
    />
    <Button>Submit</Button>
  </div>
</Template>

<Story name="use-focus-trap" />

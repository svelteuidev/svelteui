<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Input } from './index';
	import { EnvelopeClosed } from 'radix-icons-svelte';

	let value = 'Hello';
	let valueNumber = 0;
</script>

<Meta title="Components/Input" component={Input} />

<Template let:args>
	<Input bind:value {...args} />
</Template>

<Story name="Input" id="input" />

<Story name="Input Filled variant" id="inputFilled" args={{ variant: "filled" }} />

<Story name="Input Unstyled variant" id="inputUnstyled" args={{ variant: "unstyled" }} />

<Story name="Input as a number" id="inputNumber">
	<Input bind:value={valueNumber} type="number" />
	{valueNumber}
	{typeof valueNumber}
</Story>

<Story name="Input invalid" id="inputInvalid" args={{ invalid: true }} />

<Story name="Input disabled" id="inputDisabled" args={{ disabled: true }} />

<Story name="Input with icon" id="inputIcon" args={{ icon: EnvelopeClosed }} />

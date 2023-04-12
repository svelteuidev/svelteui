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

<Story name="Filled variant" id="inputFilled" args={{ variant: "filled" }} />

<Story name="Unstyled variant" id="inputUnstyled" args={{ variant: "unstyled" }} />

<Story name="Number value" id="inputNumber">
	<Input bind:value={valueNumber} type="number" />
	{valueNumber}
	{typeof valueNumber}
</Story>

<Story name="Invalid" id="inputInvalid" args={{ invalid: true }} />

<Story name="Disabled" id="inputDisabled" args={{ disabled: true }} />

<Story name="With icon" id="inputIcon" args={{ icon: EnvelopeClosed }} />

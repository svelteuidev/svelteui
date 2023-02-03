<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Input } from './index';

	let value = 'Hello';
	let valueNumber = 0;
</script>

<Meta title="Components/Input" component={Input} />

<Template>
	<Input bind:value />
	{value}
	{typeof value}
</Template>

<Story name="Input" id="input" />

<Story name="Input as a number" id="inputNumber">
	<Input bind:value={valueNumber} type="number" />
	{valueNumber}
	{typeof valueNumber}
</Story>

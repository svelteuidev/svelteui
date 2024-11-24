<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Input } from './index';
	import { EnvelopeClosed } from 'radix-icons-svelte';
	import { Button } from '../Button';

	let value = $state('Hello');
	let valueNumber = $state(0);
</script>

<Meta title="Components/Input" component={Input} />

<Template >
	{#snippet children({ args })}
		<Input bind:value {...args} />
	{/snippet}
</Template>

<Story name="Input" id="inputStory" />

<Story name="Filled variant" id="inputFilledStory" args={{ variant: 'filled' }} />

<Story name="Unstyled variant" id="inputUnstyledStory" args={{ variant: 'unstyled' }} />

<Story name="Number value" id="inputNumberStory">
	<Input bind:value={valueNumber} type="number" />
	{valueNumber}
	{typeof valueNumber}
</Story>

<Story name="Invalid" id="inputInvalidStory" args={{ invalid: true }} />

<Story name="Disabled" id="inputDisabledStory" args={{ disabled: true }} />

<Story name="With icon" id="inputIconStory" args={{ icon: EnvelopeClosed }} />

<Story name="With icon (slot)" id="inputIconSlotStory">
	<Input bind:value>
		{#snippet icon()}
			
				<EnvelopeClosed />
			
			{/snippet}
	</Input>
</Story>

<Story name="With right section" id="inputRightSectionStory">
	<Input bind:value>
		{#snippet rightSection()}
			
				<Button on:click={() => console.log('heelo')} />
			
			{/snippet}
	</Input>
</Story>

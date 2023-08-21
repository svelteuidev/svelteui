<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Input } from './index';
	import { EnvelopeClosed } from 'radix-icons-svelte';
	import { Button } from '../Button';

	let value = 'Hello';
	let valueNumber = 0;
</script>

<Meta title="Components/Input" component={Input} />

<Template let:args>
	<Input bind:value {...args} />
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
		<svelte:fragment slot="icon">
			<EnvelopeClosed />
		</svelte:fragment>
	</Input>
</Story>

<Story name="With right section" id="inputRightSectionStory">
	<Input bind:value>
		<svelte:fragment slot="rightSection">
			<Button on:click={() => console.log('heelo')} />
		</svelte:fragment>
	</Input>
</Story>

<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { EnvelopeClosed } from 'radix-icons-svelte';
	import { NumberInput } from './index';
</script>

<Meta title="Components/NumberInput" component={NumberInput} />

<Template>
	{#snippet children({ args })}
		<NumberInput {...args} />
	{/snippet}
</Template>

<Story name="NumberInput" id="numberInputStory" />

<Story name="Decimals" id="numberInputDecimalsStory" args={{ precision: 0.01, step: 0.01 }} />

<Story
	name="With icon"
	id="numberInputIconStory"
	args={{
		label: 'Price',
		placeholder: 'Your price',
		icon: EnvelopeClosed
	}}
/>

<Story name="With icon (slot)" id="numbertInputIconSlotStory">
	<NumberInput label="Price" placeholder="Your price">
		{#snippet icon()}
			<EnvelopeClosed />
		{/snippet}
	</NumberInput>
</Story>

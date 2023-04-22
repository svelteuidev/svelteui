<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { NumberInput } from './index';
</script>

<Meta title="Components/NumberInput" component={NumberInput} />

<Template let:args>
	<NumberInput {...args} />
</Template>

<Story name="NumberInput" id="numberInputStory" />

<Story name="Decimals" id="numberInputDecimalsStory" args={{ precision: 0.01, step: 0.01 }} />

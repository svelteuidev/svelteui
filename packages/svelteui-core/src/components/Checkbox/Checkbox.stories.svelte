<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme } from '$lib/styles';
	import { Checkbox } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/Checkbox" component={Checkbox} />

<Template let:args>
	<Checkbox {...args} />
</Template>

<Story name="Checkbox" id="checkboxStory" />

<Story name="Colors" id="checkboxColorsStory">
	<div style="display: flex; gap: 10px;">
		{#each colors as color}
			<Checkbox {color} />
		{/each}
	</div>
</Story>

<Story name="Disabled" id="checkboxDisabledStory" args={{ disabled: true }} />

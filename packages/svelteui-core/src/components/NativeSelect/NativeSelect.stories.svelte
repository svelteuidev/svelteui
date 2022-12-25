<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { NativeSelect } from './index';
</script>

<Meta title="Components/NativeSelect" component={NativeSelect} />

<Template let:args>
	<NativeSelect
		data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		description="This is anonymous"
		{...args}
		on:change={(e) => {
			console.log(e.target.value);
		}}
	/>
</Template>

<Story name="NativeSelect" id="nativeSelect" />

<Story
	name="NativeSelect with error"
	id="nativeSelectError"
	args={{ error: 'Pick at least one item' }}
/>

<Story
	name="NativeSelect with array of objects"
	id="nativeSelectObjects"
	args={{
		data: [
			{ value: 'svelte', label: 'Svelte' },
			{ value: 'react', label: 'React' },
			{ value: 'vue', label: 'Vue' },
			{ value: 'angular', label: 'Angular' },
			{ value: 'solid', label: 'Solid' }
		],
		placeholder: 'Pick one',
		label: 'Select your favorite framework/library',
		description: 'This is anonymous'
	}}
/>

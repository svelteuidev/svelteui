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
	/>
</Template>

<Story name="NativeSelect" id="nativeSelectStory" />

<Story
	name="NativeSelect with error"
	id="nativeSelectErrorStory"
	args={{ error: 'Pick at least one item' }}
/>

<Story
	name="NativeSelect with array of objects"
	id="nativeSelectObjectsStory"
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

<Story name="NativeSelect with custom right section" id="nativeSelectRightSectionStory">
	<NativeSelect
		data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		description="This is anonymous"
	>
		<svelte:fragment slot="rightSection">+</svelte:fragment>
	</NativeSelect>
</Story>

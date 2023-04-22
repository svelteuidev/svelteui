<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { File, Reset, Download, Trash, Upload } from 'radix-icons-svelte';
	import Button from '../Button/Button.svelte';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Text } from '../Text';
	import { FileUpload } from './index';

	function handleSelected(files) {
		console.log(files);
	}

	let files = [];

	function preview(file) {
		return URL.createObjectURL(file);
	}

	function remove(index) {
		files = files.filter((e, i) => i !== index);
	}
</script>

<Meta title="Components/FileUpload" component={FileUpload} />

<Template let:args>
	<div style="width: 500px;">
		<FileUpload {...args} icon={Upload} fileIcon={File} removeIcon={Trash} resetIcon={Reset} />
	</div>
</Template>

<Story name="FileUpload" id="fileUploadStory" />

<Story name="Drop" id="fileUploadDropStory">
	<div style="width: 500px;">
		<FileUpload
			type="drag"
			multiple={true}
			size={'md'}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
			on:selected={handleSelected}
		>
			<IconRenderer iconSize={48} icon={Download} />
			<Text align="center" weight={'semibold'}>Click or drag file to this area to FileUpload</Text>
			<Text align="center" size="sm" color="dimmed">
				Support for a single or bulk FileUpload. Strictly prohibit from FileUploading company data
				or other band files
			</Text>
		</FileUpload>
	</div>
</Story>

<Story name="Size" id="fileUploadSizeStory">
	<div style="width: 500px;">
		<FileUpload
			size="lg"
			reset={true}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>
		<br />
		<FileUpload
			size="md"
			reset={true}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>
		<br />
		<FileUpload
			size="sm"
			reset={true}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>
		<br />
		<FileUpload
			size="xs"
			reset={true}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>
	</div>
</Story>

<Story name="Accept" id="fileUploadAcceptStory">
	<div style="width: 500px;">
		<FileUpload
			size="md"
			reset={true}
			accept="image/png,image/jpeg"
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>
	</div>
</Story>

<Story name="Custom Preview" id="fileUploadCustomStory">
	<div style="width: 500px;">
		<FileUpload
			size="md"
			multiple={true}
			accept="image/png,image/jpeg"
			bind:files
			reset={true}
			preview={false}
			icon={Upload}
			fileIcon={File}
			removeIcon={Trash}
			resetIcon={Reset}
		/>

		<ul style="list-style: none;padding: 0;">
			{#each files as { file }, i}
				<li
					style="display: flex;align-items: center;gap:10px;margin-bottom:10px;border: 1px solid #ccc;padding: 3px;"
				>
					<img style="width: 50px; height: 50px;" src={preview(file)} alt="image{i}" />
					<span style="flex: 1;">{file.name}</span>
					<Button variant="default" size={'md'} on:click={() => remove(i)}>
						<IconRenderer iconSize={20} icon={Trash} />
					</Button>
				</li>
			{/each}
		</ul>
	</div>
</Story>

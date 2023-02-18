<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Download, Trash } from 'radix-icons-svelte';
	import Button from '../Button/Button.svelte';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Text } from '../Text';
	import { FileUpload } from './index';

	function handleSelected(files) {
		alert('hello');
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
		<FileUpload {...args} on:selected={ handleSelected}/>
	</div>
</Template>

<Story name="FileUpload" />

<Story name="Drop">
	<div style="width: 500px;">
		<FileUpload
			type="drag"
			multiple={true}
			size={'md'}
			on:selected={ e => { alert('I am clicked') } }
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

<Story name="Size">
	<div style="width: 500px;">
		<FileUpload size="lg" reset={true} />
		<br />
		<FileUpload size="md" reset={true} />
		<br />
		<FileUpload size="sm" reset={true} />
		<br />
		<FileUpload size="xs" reset={true} />
	</div>
</Story>

<Story name="Accept">
	<div style="width: 500px;">
		<FileUpload size="md" reset={true} accept="image/png,image/jpeg" />
	</div>
</Story>

<Story name="Custom Preview">
	<div style="width: 500px;">
		<FileUpload
			size="md"
			multiple={true}
			accept="image/png,image/jpeg"
			bind:files
			reset={true}
			preview={false}
		/>

		<ul style="list-style: none;padding: 0;">
			{#each files as { file }, i}
				<li style="display: flex;align-items: center;gap:10px;margin-bottom:10px;border: 1px solid #ccc;padding: 3px;">
					<img
						style="width: 50px; height: 50px;"
						src={preview(file)}
						alt="image{i}"
					/>
					<span style="flex: 1;">{file.name}</span>
					<Button variant="default" size={'md'} on:click={() => remove(i)}>
						<IconRenderer iconSize={20} icon={Trash} />
					</Button>
				</li>
			{/each}
		</ul>
	</div>
</Story>

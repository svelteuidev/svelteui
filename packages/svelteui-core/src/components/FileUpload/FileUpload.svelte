<script lang="ts" module>
	export const ctx = 'Upload';
</script>

<script lang="ts">
	import useStyles from './FileUpload.styles';
	import { Box } from '../Box';
	import type { FileItem, FileUploadProps } from './FileUpload';
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import Button from '../Button/Button.svelte';

	let {
		use = [],
		element = $bindable(undefined),
		className = '',
		override = {},
		accept = undefined,
		type = undefined,
		name = undefined,
		multiple = false,
		files = $bindable([]),
		label = 'Upload',
		color = 'blue',
		size = 'sm',
		disabled = false,
		id = randomID(),
		reset = true,
		resetLabel = 'Reset',
		resetColor = 'red',
		preview = true,
		onselected = () => {},
		onremoved = () => {},
		onreset = () => {},
		icon,
		fileIcon,
		resetIcon,
		removeIcon,
		children,
		...rest
	}: FileUploadProps = $props();

	let fileUploadComponent = undefined;

	function onFileSelected(e) {
		let localFile: FileItem[] = [];
		for (let i = 0; i < e.files.length; i++) {
			let file = e.files[i];
			localFile.push({
				name: file.name,
				icon: file.name,
				size: file.size,
				file: file
			});
		}
		if (multiple) {
			files = [...files, ...localFile];
		} else {
			files = [...localFile];
		}
		onselected(files);
	}

	function remove(index) {
		fileUploadComponent.value = '';
		onremoved({ file: files[index], index });
		files = files.filter((e, i) => i !== index);
	}

	function resetFiles() {
		fileUploadComponent.value = '';
		files = [];
		onreset();
	}

	let { cx, classes, getStyles } = $derived(useStyles({ color, size }, { name: 'FileUpload' }));
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	<div class={classes.inputContainer}>
		<input
			bind:this={fileUploadComponent}
			type="file"
			{multiple}
			{accept}
			{id}
			{disabled}
			tabindex="-1"
			{name}
			onchange={({ target }) => {
				onFileSelected(target);
			}}
			use:useActions={use}
		/>
	</div>

	{#if type && type == 'drag'}
		<label
			ondragover={(ev) => {
				ev.preventDefault();
			}}
			ondrop={(event) => {
				event.preventDefault();
				event.stopPropagation();
				onFileSelected(event.dataTransfer);
			}}
			for={id}
			class={cx(classes.drag, getStyles({ css: override }))}
			class:disabled
		>
			{@render children?.()}
		</label>
	{:else}
		<div class={classes.buttonType}>
			<Button
				{size}
				{disabled}
				{color}
				onclick={() => {
					fileUploadComponent.click();
				}}
			>
				{@render icon?.()}
				{label}
			</Button>
			{#if reset}
				<Button {size} color={resetColor} disabled={files.length == 0} on:click={resetFiles}>
					{@render resetIcon?.()}
					{resetLabel}
				</Button>
			{/if}
		</div>
	{/if}
</Box>
{#if preview}
	{#each files as { file }, i}
		<div class={classes.fileItemWrapper}>
			<div class={classes.fileItemIcon}>
				{@render fileIcon?.()}
			</div>
			<span class={classes.fileItemName}>
				{file.name}
			</span>
			<span class={classes.fileItemAction}>
				<span>
					<Button variant="default" {size} on:click={() => remove(i)}>
						{@render removeIcon?.()}
					</Button>
				</span>
			</span>
		</div>
	{/each}
{/if}

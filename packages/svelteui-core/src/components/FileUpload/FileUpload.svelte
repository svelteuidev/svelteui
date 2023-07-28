<script lang="ts" context="module">
	export const ctx = 'Upload';
</script>

<script lang="ts">
	import useStyles, { fontSizes } from './FileUpload.styles';
	import { Box } from '../Box';
	import type {
		FileItem,
		FileUploadProps as $$FileUploadProps,
		FileUploadEvents as $$FileUploadEvents
	} from './FileUpload';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { createEventDispatcher, get_current_component } from 'svelte/internal';
	import { randomID } from '$lib/styles';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import Button from '../Button/Button.svelte';

	interface $$Props extends $$FileUploadProps {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$FileUploadEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		accept: $$Props['accept'] = undefined,
		type: $$Props['type'] = undefined,
		name: $$Props['name'] = undefined,
		multiple: $$Props['multiple'] = false,
		files: $$Props['files'] = [],
		label: $$Props['label'] = 'Upload',
		color: $$Props['color'] = 'blue',
		size: $$Props['size'] = 'sm',
		disabled: $$Props['disabled'] = false,
		id: $$Props['id'] = randomID(),
		icon: $$Props['icon'] = undefined,
		fileIcon: $$Props['fileIcon'] = undefined,
		removeIcon: $$Props['removeIcon'] = undefined,
		reset: $$Props['reset'] = true,
		resetLabel: $$Props['resetLabel'] = 'Reset',
		resetColor: $$Props['resetColor'] = 'red',
		resetIcon: $$Props['resetIcon'] = undefined,
		preview: $$Props['preview'] = true;
	export { className as class };

	let fileUploadComponent = undefined;
	const dispatch = createEventDispatcher();

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component(), [
		'selected',
		'removed',
		'reset'
	]);

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
		dispatch('selected', files);
	}

	function remove(index) {
		fileUploadComponent.value = '';
		dispatch('removed', { file: files[index], index });
		files = files.filter((e, i) => i !== index);
	}

	function resetFiles() {
		fileUploadComponent.value = '';
		files = [];
		dispatch('reset');
	}

	$: ({ cx, classes, getStyles } = useStyles({ color, size }, { name: 'FileUpload' }));
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...$$restProps}>
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
			on:change={({ target }) => {
				onFileSelected(target);
			}}
			use:useActions={use}
			use:forwardEvents
		/>
	</div>

	{#if type && type == 'drag'}
		<label
			on:dragleave
			on:dragover={(ev) => {
				ev.preventDefault();
			}}
			on:drop|preventDefault|stopPropagation={({ dataTransfer }) => {
				onFileSelected(dataTransfer);
			}}
			for={id}
			class={cx(classes.drag, getStyles({ css: override }))}
			class:disabled
		>
			<slot />
		</label>
	{:else}
		<div class={classes.buttonType}>
			<Button
				{size}
				{disabled}
				{color}
				on:click={() => {
					fileUploadComponent.click();
				}}
			>
				<slot name="leftIcon">
					<IconRenderer {icon} />
				</slot>

				{label}
			</Button>
			{#if reset}
				<Button {size} color={resetColor} disabled={files.length == 0} on:click={resetFiles}>
					<slot name="leftIcon">
						<IconRenderer icon={resetIcon} />
					</slot>
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
				<slot name="fileIcon">
					<IconRenderer iconSize={fontSizes[size] * 1.8} icon={fileIcon} />
				</slot>
			</div>
			<span class={classes.fileItemName}>
				{file.name}
			</span>
			<span class={classes.fileItemAction}>
				<span>
					<Button variant="default" {size} on:click={() => remove(i)}>
						<slot name="removeIcon">
							<IconRenderer iconSize={fontSizes[size] * 1.5} icon={removeIcon} />
						</slot>
					</Button>
				</span>
			</span>
		</div>
	{/each}
{/if}

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
	import { File, Reset, Trash, Upload } from 'radix-icons-svelte';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import Button from '../Button/Button.svelte';
	interface $$Props extends $$FileUploadProps {}
	interface $$Events extends $$FileUploadEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		accept: $$Props['accept'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		disabled: $$Props['disabled'] = false,
		color: $$Props['color'] = 'blue',
		icon: $$Props['icon'] = Upload,
		size: $$Props['size'] = 'xs',
		type: $$Props['type'] = undefined,
		multiple: $$Props['multiple'] = false,
		id: $$Props['id'] = randomID(),
		name: $$Props['name'] = undefined,
		files: $$Props['files'] = [],
		label: $$Props['label'] = 'Upload',
		reset: $$Props['reset'] = false,
		resetLabel: $$Props['resetLabel'] = 'Reset',
		resetColor: $$Props['resetColor'] = 'red',
		resetIcon: $$Props['resetIcon'] = Reset,
		preview: $$Props['preview'] = true;
	export { className as class };

	let active: boolean = false;
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
		dispatch('removed', files[index], index);
		files = files.filter((e, i) => i !== index);
	}
	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props

	$: ({ cx, classes, getStyles } = useStyles({ color, size }, { name: 'FileUpload' }));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<div class={classes.inputContainer}>
		<input
			bind:this={fileUploadComponent}
			type="file"
			{multiple}
			{accept}
			{id}
			{disabled}
			tabindex="-1"
			use:useActions={use}
			use:forwardEvents
			{name}
			on:change={({ target }) => {
				onFileSelected(target);
			}}
		/>
	</div>

	{#if type && type == 'drag'}
		<label
			on:dragover
			on:dragleave
			on:dragover|preventDefault|stopPropagation={({ dataTransfer }) => {
				//onFileSelected(dataTransfer);
			}}
			on:drop
			on:drop|preventDefault|stopPropagation={({ dataTransfer }) => {
				onFileSelected(dataTransfer);
			}}
			for={id}
			class={cx(classes.drag, getStyles({ css: override }))}
			class:active
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
				<IconRenderer slot="leftIcon" {icon} />

				{label}
			</Button>
			{#if reset}
				<Button
					{size}
					color={resetColor}
					disabled={files.length == 0}
					on:click={() => {
						files = [];
						dispatch('reset');
					}}
				>
					<IconRenderer slot="leftIcon" icon={resetIcon} />
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
				<IconRenderer iconSize={fontSizes[size] * 1.8} icon={File} />
			</div>
			<span class={classes.fileItemName}>
				{file.name}
			</span>
			<span class={classes.fileItemAction}>
				<span>
					<Button variant="default" {size} on:click={() => remove(i)}>
						<IconRenderer iconSize={fontSizes[size] * 1.5} icon={Trash} />
					</Button>
				</span>
			</span>
		</div>
	{/each}
{/if}

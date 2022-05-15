<script lang="ts">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';
	import { controls as controlsComponents } from './controls';
	import { propsToString, upperFirst } from '../../utils';

	export let component: ConfiguratorDemoType['default'];
	export let codeTemplate: ConfiguratorDemoConfiguration['codeTemplate'];
	export let configurator: ConfiguratorDemoConfiguration['configurator'];
	export let multiline: ConfiguratorDemoConfiguration['multiline'] = false;
	export let includeCode: ConfiguratorDemoConfiguration['includeCode'] = true;
	export let center: ConfiguratorDemoConfiguration['center'] = true;

	let data: Record<string, any> = {};
	let children, componentProps, controls;

	$: data = configurator.reduce((acc, prop) => {
		acc[prop.name] = prop.initialValue;
		return acc;
	}, {});
	$: ({ children, ...componentProps } = data);
	$: propsCode = propsToString({
		props: configurator,
		values: data,
		multiline
	});

	$: code = codeTemplate(propsCode.length > 0 ? ` ${propsCode}` : propsCode, children);

	$: controls = configurator.map((control) => {
		const { type, label, name, initialValue, defaultValue, ...props } = control;

		return {
			component: controlsComponents[type],
			label: upperFirst(control.label || control.name),
			value: data[name],
			onChange(e) {
				const value = e.currentTarget ? e.currentTarget.value : e.detail;
				changeData(name, value);
			},
			props
		};
	});

	function changeData(name: string, value: any) {
		data = { ...data, [name]: value };
	}
</script>

<div class="preview">
	<div class="component" class:vertical-center={center}>
		<svelte:component this={component} props={componentProps}>{children}</svelte:component>
	</div>
	<div class="controls">
		{#each controls as { component, label, value, props, onChange }, i}
			<!-- TODO: remove condition when all controls will be done -->
			{#if component}
				<div class="control">
					<svelte:component this={component} {label} {value} {...props} on:change={onChange} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<pre>
    {code}
</pre>

<style>
	.preview {
		display: flex;
		width: 600px;
	}

	.component {
		flex-grow: 1;
		display: flex;
	}

	.vertical-center {
		justify-content: center;
	}

	.controls {
		width: 250px;
		padding-left: 20px;
		border-left: 1px solid #e8e8e8;
	}

	.control + .control {
		margin-top: 15px;
	}
</style>

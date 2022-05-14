<script lang="ts">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';
	import { controls } from './controls';
	import { propsToString, upperFirst } from '../../utils';

	export let component: ConfiguratorDemoType['default'];
	export let codeTemplate: ConfiguratorDemoConfiguration['codeTemplate'];
	export let configurator: ConfiguratorDemoConfiguration['configurator'];
	export let multiline: ConfiguratorDemoConfiguration['multiline'] = false;
	export let includeCode: ConfiguratorDemoConfiguration['includeCode'] = true;
	export let center: ConfiguratorDemoConfiguration['center'] = true;

	let data: Record<string, any> = {};
	let children, componentProps;

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

	function changeData(name: string, value: any) {
		data = { ...data, [name]: value };
	}
</script>

<div class="preview">
	<div class="component" class:vertical-center={center}>
		<svelte:component this={component} props={componentProps}>{children}</svelte:component>
	</div>
	<div class="controls">
		{#each configurator as control, i}
			<!-- TODO: remove if when all controls will be done -->
			{#if control.type in controls}
				<div class="control">
					<svelte:component
						this={controls[control.type]}
						label={upperFirst(control.label || control.name)}
						value={data[control.name]}
						data={control.data}
						capitalize={control.capitalize}
						on:change={(e) => {
							const value = e.currentTarget ? e.currentTarget.value : e.detail;
							changeData(control.name, value);
						}}
					/>
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

<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Alert } from './index';
</script>

<Meta title="Components/Alert" component={Alert} />

<Template>
	{#snippet children({ args })}
		<Alert {...args}>This is an alert!</Alert>
	{/snippet}
</Template>

<Story name="Alert" id="alertStory" />

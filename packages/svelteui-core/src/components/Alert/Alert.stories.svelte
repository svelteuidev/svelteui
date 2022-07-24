<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Alert } from './index';
</script>

<Meta title="Components/Alert" component={Alert} />

<Template let:args>
	<Alert {...args}>
        This is an alert!
    </Alert>
</Template>

<Story name="Alert"/>

<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from './index';
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Button" />

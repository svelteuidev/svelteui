<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Month } from './index';
</script>

<Meta title="Dates/Month" component={Month} />

<Template >
	{#snippet children({ args })}
		<Month {...args} month={new Date()} />
	{/snippet}
</Template>

<Story name="Month" id="monthStory" />

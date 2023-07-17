<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Blockquote } from './index';
	import { Center } from '../Center/index';
	import { EnvelopeClosed } from 'radix-icons-svelte';

	const text = `Money is just one thing, folks. There's a lot of other one things that are everything. There's
		also that one thing that's a one thing so special you'd give every other one thing to save that
		one thing and be lost without that one thing. And if you lost that one thing, you'd be left with
		nothing. A nothing so empty and cold that all the other one things will mean nothing.`;
</script>

<Meta title="Components/Blockquote" component={Blockquote} />

<Template let:args>
	<Center>
		<div style="max-width: 600px;">
			<Blockquote {...args}>
				{text}
				<svelte:fragment slot="cite">- Corey Riffin</svelte:fragment>
			</Blockquote>
		</div>
	</Center>
</Template>

<Story name="Default" id="blockquoteStory" args={{ iconSize: 20 }} />

<Story name="No Icon" id="blockquoteNoIconStory" args={{ icon: null }} />

<Story name="Custom Icon" id="blockquoteCustomIconStory" args={{ icon: EnvelopeClosed }} />

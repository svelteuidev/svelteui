<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Anchor } from '../Anchor';
	import { Stack } from '../Stack';
	import { Text } from '../Text';
	import { Title } from '../Title';
	import { AppShell, Header, Navbar, ShellSection } from './index';
</script>

<Meta title="Components/App Shell" component={AppShell} />

<Template>
	<AppShell>
		{#snippet navbar()}
				<Navbar  fixed width={{ sm: 200, lg: 300 }}>
				<ShellSection grow>
					<Stack>
						<Text align="center">Navbar</Text>
						<Anchor href="#">Home Page</Anchor>
						<Anchor href="#">Test Page</Anchor>
					</Stack>
				</ShellSection>
			</Navbar>
			{/snippet}
		{#snippet header()}
				<Header  height={60}>
				<Title>Header</Title>
			</Header>
			{/snippet}
		<div style="display: flex;">This is the main content</div>
	</AppShell>
</Template>

<Story name="App Shell" id="appShellStory" />

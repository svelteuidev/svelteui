<script>
	import {
		Group,
		Paper,
		TextInput,
		SimpleGrid,
		Button,
		Chip,
		Switch,
		NativeSelect,
		Notification,
		Progress,
		Modal,
		Tooltip,
		Tabs,
		Alert,
		Loader,
    Overlay
	} from '@svelteuidev/core';
	import { Camera, EnvelopeClosed, Gear, InfoCircled } from 'radix-icons-svelte';

	let value = 0,
		modalOpened = false;

	const listStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: '1rem'
	};

	function changeProgressValue(type) {
		if (type === 'increment') {
			value = value !== 100 ? (value += 10) : value;
		} else {
			value = value !== 0 ? (value -= 10) : value;
		}
	}
</script>

<SimpleGrid cols={3} spacing="xl">
	<Paper withBorder>
		<TextInput placeholder="Your name" label="Full name" />
	</Paper>
	<Paper override={listStyles} withBorder>
		<Group grow>
			<Button>Default</Button>
			<Button disabled>Disabled</Button>
			<Button ripple>Ripple</Button>
		</Group>
	</Paper>
	<Paper override={listStyles} withBorder>
		<Group>
			<Chip>Default</Chip>
			<Chip disabled>Disabled</Chip>
			<Chip variant="filled">Filled</Chip>
		</Group>
	</Paper>
	<Paper override={listStyles} withBorder>
		<Switch checked label="I agree to sell my privacy" />
	</Paper>
	<Paper withBorder>
		<NativeSelect
			data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
			placeholder="Pick one"
			label="Select your favorite framework/library"
			description="This is anonymous"
		/>
	</Paper>
	<Paper withBorder>
		<Notification title="Default notification">
			This is the default notification with title and body
		</Notification>
	</Paper>
	<Paper withBorder>
		<Progress size="xl" animate {value} tween tweenOptions={{ duration: 250 }} />
		<Group override={{ paddingTop: '1rem' }} position="center">
			<Button on:click={() => changeProgressValue('increment')}>+</Button>
			<Button on:click={() => changeProgressValue('decrement')}>-</Button>
		</Group>
	</Paper>
	<Paper override={listStyles} withBorder>
		<Modal opened={modalOpened} on:close={() => (modalOpened = false)} title="This is a modal!">
			<Group position="center">
				<p>Hope you liked it!</p>
			</Group>
		</Modal>

		<Group position="center">
			<Button on:click={() => (modalOpened = true)}>Open Modal</Button>
		</Group>
	</Paper>
	<Paper override={listStyles} withBorder>
		<Tooltip label="Hey!">
			<Button>Show tooltip</Button>
		</Tooltip>
	</Paper>
	<Paper override={listStyles} withBorder>
		<Tabs>
			<Tabs.Tab label="Gallery" icon={Camera}>
				<Group position="center">Gallery tab content</Group>
			</Tabs.Tab>
			<Tabs.Tab label="Messages" icon={EnvelopeClosed}>
				<Group position="center">Messages tab content</Group>
			</Tabs.Tab>
			<Tabs.Tab label="Settings" icon={Gear}>
				<Group position="center">Settings tab content</Group>
			</Tabs.Tab>
		</Tabs>
	</Paper>
	<Paper withBorder>
		<Alert icon={InfoCircled} title="Oopsie!">
			Seems like our servers (actually a single Raspberry pi) crashed, please wait while our
			underpaid worker tries to solder the CPU again.
		</Alert>
	</Paper>
  <Paper override={listStyles} withBorder>
    <Loader variant="circle" />
    <Loader variant="dots" />
    <Loader variant="bars" />
  </Paper>
</SimpleGrid>

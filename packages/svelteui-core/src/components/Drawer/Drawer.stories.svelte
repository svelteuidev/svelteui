<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Drawer } from './index';
	import { Button } from '../Button';
	import TextInput from '../TextInput/TextInput.svelte';
	import Checkbox from '../Checkbox/Checkbox.svelte';
	import InputWrapper from '../InputWrapper/InputWrapper.svelte';
	import Input from '../Input/Input.svelte';
	import { Grid } from '../Grid';
	import { EnvelopeClosed, LockClosed } from 'radix-icons-svelte';
	import type { DrawerPosition } from './Drawer';

	let opened = false;

	function toggleOpen() {
		opened = !opened;
	}
	function handleClose() {
		opened = false;
	}

	let openedPosition = false;

	function toggleOpenPosition() {
		openedPosition = !openedPosition;
	}
	function handleClosePosition() {
		openedPosition = false;
	}

	let position: DrawerPosition = 'left';
</script>

<Meta title="Components/Drawer" component={Drawer} />

<Template let:args>
	<Button on:click={toggleOpen}>Bottom</Button>
	<Drawer
		size={'500px'}
		title={'Title of Drawer'}
		{opened}
		position={'bottom'}
		on:close={handleClose}
		{...args}
	>
		<div style="height: 100%;width:200px;background-color: brown;">fsdfdsfsƒ</div>
	</Drawer>
</Template>

<Story name="Right">
	<Button on:click={toggleOpen}>Right</Button>

	<Drawer
		withinPortal={true}
		size={'500px'}
		title={'Title of Drawer'}
		{opened}
		position={'right'}
		on:close={handleClose}
	>
		<Grid>
			<Grid.Col span={6}
				><InputWrapper id="input-demo1" label="First Name">
					<Input placeholder="Enter first name" />
				</InputWrapper></Grid.Col
			>
			<Grid.Col span={6}>
				<InputWrapper id="input-demo3" label="Last Name">
					<Input placeholder="Enter last name" />
				</InputWrapper></Grid.Col
			>
			<Grid.Col span={12}>
				<InputWrapper id="input-demo2" label="Email" description="">
					<Input icon={EnvelopeClosed} placeholder="Enter your email id" />
				</InputWrapper></Grid.Col
			>
			<Grid.Col span={12}>
				<InputWrapper id="input-demo4" label="Password" description="">
					<Input icon={LockClosed} placeholder="Enter Password" />
				</InputWrapper></Grid.Col
			>
			<Grid.Col span={12}>
				<InputWrapper id="input-demo4" label="Confirm Password" description="">
					<Input icon={LockClosed} placeholder="Enter Confirm Password" />
				</InputWrapper></Grid.Col
			>
			<Grid.Col span={12}><Checkbox size={'md'} label="I agree to sell my privacy" /></Grid.Col>
			<Grid.Col span={12}><Button>Save</Button></Grid.Col>
		</Grid>
	</Drawer>
</Story>

<Story name="Position">
	<Grid>
		<Grid.Col span={6}
			><Button
				on:click={() => {
					toggleOpenPosition();
					position = 'right';
				}}>Right</Button
			></Grid.Col
		><Grid.Col span={6}
			><Button
				on:click={() => {
					toggleOpenPosition();
					position = 'left';
				}}>Left</Button
			></Grid.Col
		><Grid.Col span={6}
			><Button
				on:click={() => {
					toggleOpenPosition();
					position = 'top';
				}}>Top</Button
			></Grid.Col
		><Grid.Col span={6}
			><Button
				on:click={() => {
					toggleOpenPosition();
					position = 'bottom';
				}}>Bottom</Button
			></Grid.Col
		></Grid
	>

	<Drawer
		size={'300px'}
		title={'Title of Drawer'}
		opened={openedPosition}
		{position}
		on:close={handleClosePosition}
	>
		<div style="height: 100%;width:200px;">Drawer content</div>
	</Drawer>
</Story>

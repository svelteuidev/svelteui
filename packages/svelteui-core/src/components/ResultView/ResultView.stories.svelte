<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import {
		Check,
		CheckCircled,
		CrossCircled,
		ExclamationTriangle,
		InfoCircled
	} from 'radix-icons-svelte';
	import Button from '../Button/Button.svelte';
	import Text from '../Text/Text.svelte';
	import { ResultView } from './index';
</script>

<Meta title="Components/ResultView" component={ResultView} />

<Template let:args>
	<ResultView {...args}>
		<div slot="extra">
			<Button>Go Back</Button>
			<Button>Buy Again</Button>
		</div>
	</ResultView>
</Template>

<Story name="Default" id="ResultView1">
	<ResultView
		title="Order Successfully Placed"
		icon={CheckCircled}
		subtitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
	>
		<svelte:fragment slot="extra">
			<Button>Go Back</Button>
			<Button variant={'outline'}>Buy Again</Button>
		</svelte:fragment>
	</ResultView>
</Story>

<Story name="Info">
	<ResultView title="Your operation has been executed" icon={InfoCircled} color={'blue'}>
		<svelte:fragment slot="extra">
			<Button>Ok</Button>
		</svelte:fragment>
	</ResultView>
</Story>

<Story name="Warning">
	<ResultView
		title="There are some problems with your operation"
		icon={ExclamationTriangle}
		color={'orange'}
	>
		<svelte:fragment slot="extra">
			<Button>Try Again</Button>
		</svelte:fragment>
	</ResultView>
</Story>

<Story name="Failed">
	<ResultView
		title="Submission Failed"
		icon={CrossCircled}
		color={'red'}
		subtitle="Please check and modify the following information before resubmitting."
	>
		<Text root="p" weight={'bold'}>The content you submitted has the following error:</Text>
		<Text root="p">Your account has been frozen</Text>
		<Text root="p">Your account is not yet eligible to apply</Text>
		<svelte:fragment slot="extra">
			<Button>Go Back</Button>
			<Button variant={'outline'}>Buy Again</Button>
		</svelte:fragment>
	</ResultView>
</Story>

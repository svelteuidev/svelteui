<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import {
		Modal,
		Group,
		Button,
		TextInput,
		Stack,
		Space,
		Notification,
		Affix
	} from '@svelteuidev/core';
	import type { ModalProps } from '@svelteuidev/core';

	let {
		withOpenButton = true,
		closeModal = () => (opened = false),
		opened = $bindable(false),
		...rest
	}: ModalProps = $props();

	let notificationOpened = $state(false);

	let firstNameValue: string = $state('');
	let lastNameValue: string = $state('');

	function submitForm() {
		opened = false;
		notificationOpened = true;
		setTimeout(() => (notificationOpened = false), 4000);
	}
</script>

<Modal {opened} onclose={closeModal} titleText="Introduce yourself!" {...rest}>
	<Stack>
		<TextInput bind:value={firstNameValue} placeholder={'First Name'} label={'First Name'} />
		<TextInput bind:value={lastNameValue} placeholder={'Last Name'} label={'Last Name'} />
	</Stack>
	<Space h="lg" />
	<Group position="right">
		<Button onclick={closeModal} variant="outline">Cancel</Button>
		<Button onclick={submitForm}>Submit</Button>
	</Group>
</Modal>

{#if withOpenButton}
	<Group position="center">
		<Button onclick={() => (opened = true)}>Open Modal</Button>
	</Group>
{/if}

{#if notificationOpened}
	<Affix position={{ bottom: 20, right: 20 }}>
		<div transition:fly|global={{ x: 100, duration: 400, easing: quintInOut }}>
			<Notification
				title="Form Submitted Successfully"
				onclose={() => (notificationOpened = false)}
			>
				Your form was subbmitted successfully! No need to think about it any longer.
			</Notification>
		</div>
	</Affix>
{/if}

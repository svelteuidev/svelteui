<script lang="ts">
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
	import type { ModalStyles } from '@svelteuidev/core';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	interface $$Props extends Partial<ModalStyles.ModalProps> {
		withOpenButton?: boolean;
		closeModal?: (...args: any[]) => boolean;
	}

	export let opened = false;
	export let withOpenButton = true;
	export let closeModal = () => (opened = false);

	let notificationOpened = false;

	const firstName = 'First Name';
	const lastName = 'Last Name';

	let firstNameValue;
	let lastNameValue;

	function submitForm() {
		opened = false;
		notificationOpened = true;
		setTimeout(() => (notificationOpened = false), 4000);
	}
</script>

<Modal {opened} on:close={closeModal} title="Introduce yourself!" {...$$restProps}>
	<Stack>
		<TextInput bind:value={firstNameValue} placeholder={firstName} label={firstName} />
		<TextInput bind:value={lastNameValue} placeholder={lastName} label={lastName} />
	</Stack>
	<Space h="lg" />
	<Group position="right">
		<Button on:click={closeModal} variant="outline">Cancel</Button>
		<Button on:click={submitForm}>Submit</Button>
	</Group>
</Modal>

{#if withOpenButton}
	<Group position="center">
		<Button on:click={() => (opened = true)}>Open Modal</Button>
	</Group>
{/if}

{#if notificationOpened}
	<Affix position={{ bottom: 20, right: 20 }}>
		<div transition:fly={{ x: 100, duration: 400, easing: quintInOut }}>
			<Notification
				title="Form Submitted Successfully"
				on:close={() => (notificationOpened = false)}
			>
				Your form was subbmitted successfully! No need to think about it any longer.
			</Notification>
		</div>
	</Affix>
{/if}

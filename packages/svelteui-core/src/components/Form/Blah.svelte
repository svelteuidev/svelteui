<script>
	import { Button } from '../Button';
	import Center from '../Center/Center.svelte';
	import Checkbox from '../Checkbox/Checkbox.svelte';
	import Flex from '../Flex/Flex.svelte';
	import Stack from '../Stack/Stack.svelte';
	import { TextInput } from '../TextInput';
	import Field from './Field.svelte';
	import Form from './Form.svelte';
	import { hasLength, isNotEmpty } from './utils';
</script>

<Form
	initialValues={{ firstName: 'Super', lastName: '', agree: false }}
	validation={{
		firstName: isNotEmpty('First name is required'),
		lastName: hasLength({ min: 3 }, 'Value must have 3  or more characters'),
		agree: (v) => (v ? undefined : 'You must agree to the terms we know you didnt read')
	}}
	validateInputOnChange
	validateInputOnBlur
	let:form
>
	<form
		on:submit|preventDefault={form.onSubmit((values) => {
			console.log({ values });
		})}
		on:reset={form.onReset}
	>
		<Center>
			<Stack>
				<Field {form} name="firstName" let:field let:htmlInputProps>
					<label>
						<div>First name (html input)</div>
						<input
							{...htmlInputProps}
							aria-describedby={field.error ? 'first-name-error' : undefined}
							on:input={field.onChange}
						/>
					</label>
					{#if field.error}
						<div id="first-name-error">{field.error}</div>
					{/if}
				</Field>
				<Field {form} name="lastName" let:field let:inputProps>
					<TextInput label="Last name (svelteui input)" {...inputProps} on:input={field.onChange} />
					{field.value}
				</Field>
				<Field {form} name="agree" isCheckbox let:field let:inputProps>
					<Checkbox
						aria-describedby={field.error ? 'agree-error' : undefined}
						label="I agree to the conditions i didnt read"
						{...inputProps}
						on:input={field.onChange}
					/>
					<!-- Checkbox doesn't support errors yet -->
					{#if field.error}
						<div id="agree-error">{field.error}</div>
					{/if}
				</Field>
				<Flex gap="$md">
					<Button type="reset" variant="outline">Reset</Button>
					<Button type="submit">Submit</Button>
				</Flex>
			</Stack>
		</Center>
	</form>
</Form>

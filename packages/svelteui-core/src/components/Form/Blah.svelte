<script>
	import { Button } from '../Button';
	import Center from '../Center/Center.svelte';
	import Flex from '../Flex/Flex.svelte';
	import Stack from '../Stack/Stack.svelte';
	import { TextInput } from '../TextInput';
	import Field from './Field.svelte';
	import Form from './Form.svelte';
	import { hasLength, isNotEmpty } from './src';
</script>

<Form
	initialValues={{ firstName: 'Super', lastName: 'Mario' }}
	validation={{
		firstName: isNotEmpty('First name is required'),
		lastName: hasLength({ min: 3 }, 'Value must have 3  or more characters')
	}}
	validateInputOnChange
	validateInputOnBlur
	let:form
>
	<form
		on:submit|preventDefault={form.onSubmit((values) => {
			console.log({ values });
		})}
		on:reset|preventDefault={form.reset}
	>
		<Center>
			<Stack>
				<Field {form} name="firstName" let:field let:htmlInputProps>
					<label>
						<div>First name (html input)</div>
						<input
							{...htmlInputProps}
							aria-describedby={field.error ? 'first-name-error' : undefined}
							on:input={(e) => {
								field.onChange(e.target.value);
							}}
						/>
					</label>
					{#if field.error}
						<div id="first-name-error">{field.error}</div>
					{/if}
				</Field>
				<Field {form} name="lastName" let:field let:inputProps>
					<TextInput
						label="Last name (svelteui input)"
						{...inputProps}
						on:input={(e) => {
							field.onChange(e.target.value);
						}}
					/>
					{field.value}
				</Field>
				<Flex gap="$md">
					<Button type="reset" variant="outline">Reset</Button>
					<Button type="submit">Submit</Button>
				</Flex>
			</Stack>
		</Center>
	</form>
</Form>

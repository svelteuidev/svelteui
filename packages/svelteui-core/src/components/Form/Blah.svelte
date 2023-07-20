<script>
	import { Trash } from 'radix-icons-svelte';
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
	initialValues={{
		user: { firstName: 'Super', lastName: '' },
		pokemon: [
			{ name: 'Mantine', type: 'water' },
			{ name: 'Monferno', type: 'fire' },
			{ name: 'Magicarp', type: 'water' }
		],
		agree: false
	}}
	validation={{
		user: {
			firstName: isNotEmpty('First name is required'),
			lastName: hasLength({ min: 3 }, 'Value must have 3  or more characters')
		},
		pokemon: { name: isNotEmpty('Name is required') },
		agree: (v) => (v ? undefined : 'You must agree to the terms we know you didnt read')
	}}
	validateInputOnChange
	validateInputOnBlur
	let:form
>
	<form
		on:submit={form.onSubmit((values) => {
			console.log({ values });
		})}
		on:reset={form.onReset}
	>
		<Center>
			<Stack>
				<Field {form} name="user.firstName" let:field let:htmlInputProps>
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
				<Field {form} name="user.lastName" let:field let:inputProps>
					<TextInput label="Last name (svelteui input)" {...inputProps} on:input={field.onChange} />
				</Field>
				<h2>Pokemon</h2>
				{#each form.values.pokemon as _pokemon, i}
					<Flex gap="$md" align="end">
						<Field {form} name={`pokemon.${i}.name`} let:field let:inputProps>
							<TextInput label="Name" {...inputProps} on:input={field.onChange} />
						</Field>
						<Field {form} name={`pokemon.${i}.type`} let:field let:inputProps>
							<TextInput label="Type" {...inputProps} on:input={field.onChange} />
						</Field>
						<Button
							on:click={() => form.removeListItem('pokemon', i)}
							type="button"
							variant="default"><Trash /></Button
						>
					</Flex>
				{/each}
				<Flex gap="$md">
					<Button
						on:click={() => form.insertListItem('pokemon', { name: '', type: '' })}
						type="button"
					>
						Add Pokemon
					</Button>
					<Button
						disabled={!form.values.pokemon.length}
						on:click={() =>
							form.reorderListItem('pokemon', { from: form.values.pokemon.length - 1, to: 0 })}
						type="button"
					>
						Move Last Item To The Top
					</Button>
				</Flex>
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

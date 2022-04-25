import CodeBlock from '../../CodeBlock';
import { SegmentedControl } from '@mantine/core';
import { useState } from 'react';

const Project = () => {
	const [value, setValue] = useState('svelte');

	return (
		<>
			<SegmentedControl
				fullWidth
				value={value}
				onChange={setValue}
				data={[
					{ label: 'Svelte', value: 'svelte' },
					{ label: 'SvelteKit', value: 'svelte-kit' }
				]}
			/>

			<br />

			{value === 'svelte' ? <SvelteScript /> : <SvelteKitScript />}
		</>
	);
};

export default Project;

function SvelteScript() {
	return <CodeBlock className="tsx">npx degit sveltejs/template my-svelte-project</CodeBlock>;
}

function SvelteKitScript() {
	return <CodeBlock className="tsx">npm init svelte@next my-app</CodeBlock>;
}

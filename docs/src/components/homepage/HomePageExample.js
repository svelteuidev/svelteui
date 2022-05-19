/* eslint-disable no-useless-escape */
export const HomePageExampleCode = `
<script>
import { Container, Title, Text, Button, css } from '@svelteuidev/core';
	const HeroImage = css({
		length: 0,
		backgroundColor: '#11284b',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage:
			'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
		paddingTop: '60px',
		paddingBottom: '60px',
		'& .inner': {
			flexDirection: 'column',
			justifyContent: 'space-between',
			'@md': {
				display: 'flex'
			}
		},
		'& .image': {
			display: 'none',
			'@md': {
				display: 'block'
			}
		},
		'& .content': {
			marginRight: 0,
			paddingBottom: '40px',
			paddingTop: '40px',
			'@md': {
				marginRight: '60px'
			}
		},
		'& .title': {
			maxWidth: '100%',
			fontSize: 34,
			lineHeight: 1.15,
			color: 'white',
			fontFamily: \`Greycliff CF, $standard\`,
			fontWeight: 900,
			'@md': {
				maxWidth: 500,
				lineHeight: 1.05,
				fontSize: 48
			}
		},
		'& .description': {
			maxWidth: '100%',
			color: 'white',
			opacity: 0.75,
			'@md': {
				maxWidth: 500
			}
		},
		'& .control': {
			width: '100%',
			paddingLeft: 50,
			paddingRight: 50,
			fontFamily: \`Greycliff CF, $standard\`,
			fontSize: 22,
			'@md': {
				width: 'auto'
			}
		}
	});
<\/script>

<div class={HeroImage()}>
	<Container size="lg">
		<div class="inner">
			<div class="content">
				<Title class="title">
					SvelteUI is
					<Text
						component="span"
						inherit
						variant="gradient"
						gradient={{ from: 'pink', to: 'yellow', deg: 45 }}
					>
						the best
					<\/Text>{' '}
					Svelte UI library 😁
				<\/Title>

				<Text class="description" override={{ mt: 30 }}>
					SvelteUI contains more than just components. With Actions, Transitions, and Utilities available to you, development will be fun and easy!
				<\/Text>

				<Button
					variant="gradient"
					gradient={{ from: 'pink', to: 'yellow', deg: 45 }}
					size="xl"
					class="control"
					override={{ mt: 40 }}
				>
					Get started
				<\/Button>
			<\/div>
		<\/div>
	<\/Container>
<\/div>
`;

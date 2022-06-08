<script lang="ts">
	import {
		createStyles,
		Button,
		Group,
		TextInput,
		Stack,
		Switch,
		Badge,
		Tooltip,
		Checkbox,
		Box,
		Card,
		ActionIcon,
		Text,
		NativeSelect
	} from '@svelteuidev/core';
	import { Animation } from '@svelteuidev/motion';
	import CardDemo from './_Card.svelte';
	import { mobile } from 'components';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { Prism } from '@svelteuidev/prism';
	export let title = 'Examples',
		author = 'brisklemonade',
		code = `<script>const hello = 'world'<\/script>`,
		language = 'svelte',
		center = false;
	let previewState = 'preview';

	const BREAKPOINT = '@media (max-width: 755px)';

	const useStyles = createStyles((theme) => {
		const { themeColor, size } = theme.fn;
		return {
			root: {
				[`${theme.dark} &`]: {
					border: `1px solid ${themeColor('dark', 6)}`,
					backgroundColor: themeColor('dark', 6)
				},
				borderRadius: theme.radii.md.value,
				border: `1px solid ${themeColor('gray', 2)}`,
				backgroundColor: 'white',

				'&:not(:first-of-type)': {
					marginTop: +theme.space.xl.value * 2
				}
			},

			container: {
				[BREAKPOINT]: {
					[`${theme.dark} &`]: {
						borderBottom: `1px solid ${themeColor('dark', 4)}`
					},
					borderBottom: `1px solid ${themeColor('gray', 2)}`
				}
			},

			bodyPreview: {
				[`${theme.dark} &`]: {
					backgroundColor: themeColor('dark', 6)
				},
				backgroundColor: themeColor('gray', 0),
				padding: '$mdPX $mdPX',
				borderBottomRightRadius: 8 - 1,
				borderBottomLeftRadius: 8 - 1,

				[BREAKPOINT]: {
					padding: 0
				}
			},

			bodyRaw: {
				padding: 0
			},

			bodyWithCode: {
				[`${theme.dark} &`]: {
					backgroundColor: themeColor('dark', 8)
				},
				padding: 0,
				backgroundColor: 'white'
			},

			previewDimmed: {
				[`${theme.dark} &`]: {
					backgroundColor: themeColor('dark', 6)
				},
				backgroundColor: themeColor('gray', 0)
			},

			code: {
				borderBottomRightRadius: 8 - 1,
				borderBottomLeftRadius: 8 - 1,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0
			},

			preview: {
				[`${theme.dark} &`]: {
					backgroundColor: themeColor('dark', 7)
				},
				backgroundColor: 'white',
				padding: size({ size: 'md', sizes: theme.space }),
				borderRadius: theme.radii.md.value,
				position: 'relative',

				[BREAKPOINT]: {
					padding: 0,
					borderTopRightRadius: 0,
					borderTopLeftRadius: 0,
					'& .noCode': {
						padding: size({ size: 'xs', sizes: theme.space })
					}
				}
			}
		};
	});

    /** Prism patch until next version */
	const override = { pre: { overflow: 'scroll', px: '$lgPX' } };
	$: ({ cx, classes, getStyles } = useStyles());
</script>

<div class={getStyles()}>
	<Card.Container
		class={classes.container}
		override={{
			bblr: '0px !important',
			bbrr: '0px !important',
			d: 'flex !important',
			jc: 'space-between'
		}}
	>
		<Group>
			<Text weight="bold" override={{ mr: 15 }}>{title}</Text>
			<Text size="xs" override={{ d: 'flex', gap: '$2' }}>
				Made by
				<Box
					root="a"
					href={`https://github.com/${author}`}
					rel="noreferrer noopener"
					target="_blank"
					css={{ m: 0, textDecoration: 'none' }}
				>
					<Text size="xs" color="gray">
						@{author}
					</Text>
				</Box>
			</Text>
		</Group>
	</Card.Container>
	<div
		class={cx(classes.bodyPreview, {
			[classes.bodyWithCode]: false,
			[classes.bodyRaw]: false
		})}
	>
		<Box class={classes.preview} css={{ zIndex: 1 }}>
			{#if previewState === 'preview'}
				<Box class='noCode' css={center ? { d: 'flex', jc: 'center' } : {}}>
					<Group position="center" direction={$mobile ? 'column' : 'row'}>
						<Animation duration={15} animation="float">
							<Button ripple>Click Me</Button>
						</Animation>
						<Stack align="center">
							<Animation duration={11} animation="float">
								<TextInput
									placeholder="me@example.com"
									label="Email"
									description="Type your email"
									required
								/>
							</Animation>
							<Animation duration={14} animation="float">
								<Switch offLabel="off" onLabel="on" size="lg" />
							</Animation>
						</Stack>
						<Animation duration={10} animation="float">
							<CardDemo />
						</Animation>
						<Animation duration={13} animation="float">
							<Tooltip label="I am a tooltip" withArrow>
								<Badge variant="light">Hover Me</Badge>
							</Tooltip>
						</Animation>
						<Animation duration={10} animation="float">
							<Checkbox label="Agree to give me all of your money?" />
						</Animation>
					</Group>
				</Box>
			{:else}
				<div transition:slide={{ duration: 350, easing: sineInOut }}>
					<Prism {override} {language} {code} />
				</div>
			{/if}
		</Box>
	</div>
</div>

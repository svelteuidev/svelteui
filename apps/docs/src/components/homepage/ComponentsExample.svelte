<script>
	import {
		Group,
		TextInput,
		Button,
		Chip,
		Switch,
		NativeSelect,
		Notification,
		Progress,
		Modal,
		Tooltip,
		Tabs,
		Alert,
		Loader,
		createStyles,
		NumberInput,
		ActionIcon,
		Badge,
		Card,
		Image,
		Text,
		Timeline,
		Center,
		Skeleton,
		Menu,
		Divider,
		Popper,
		Box
	} from '@svelteuidev/core';

  import { Month } from "@svelteuidev/dates"

	import {
		Input,
		Dashboard,
		ExclamationTriangle,
		Stack,
		GithubLogo,
		Commit,
		EyeOpen,
		LightningBolt,
		InfoCircled,
		ChatBubble,
		Gear,
		MagnifyingGlass,
		Trash,
    Calendar
	} from 'radix-icons-svelte';

	let value = 0,
		modalOpened = false,
		reference,
		popperMounted = false,
    monthValue = new Date();

	const toggleMount = () => {
		popperMounted = !popperMounted;
	};

	function changeProgressValue(type) {
		if (type === 'increment') {
			value = value !== 100 ? (value += 10) : value;
		} else {
			value = value !== 0 ? (value -= 10) : value;
		}
	}

	const useStyles = createStyles((theme) => ({
		root: {
			color: theme.fn.themeColor('gray', 9),
			fontSize: theme.fontSizes.md.value,
			padding: `${theme.space.lg.value}px ${theme.space.xl.value}px`,
			darkMode: {
				backgroundColor: theme.fn.themeColor('dark', 6),
				color: theme.fn.themeColor('dark', 0),
				border: `1px solid ${theme.fn.themeColor('dark', 6)}`
			},
			transitionProperty: 'all',
			transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			transitionDuration: '200ms',

			width: '15rem !important',
			height: '4rem !important',
			fontWeight: 'bold !important',

			'&:hover': {
				backgroundColor: '#f2f2f2 !important'
			},
			'&.active': {
				backgroundColor: '#228be6 !important',
				color: theme.colors.white.value
			},
			'&.active:hover': {
				backgroundColor: theme.colors.white.value
			},
			'&:first-of-type': {
				borderTopLeftRadius: theme.radii.md.value
			},
			'&:last-of-type': {
				borderBottomLeftRadius: theme.radii.md.value
			}
		}
	}));
	$: ({ classes } = useStyles());
	const variants = ['hover', 'filled', 'outline', 'light', 'default', 'transparent'];
</script>

<div class="componentExamplesWrapper">
	<Tabs orientation="vertical" variant="unstyled">
		<Tabs.Tab label="Inputs and Actions" class={classes.root} icon={Input}>
			<div class="componentExamplesTabPanel">
				<div class="componentExamplesSectionOne">
					<TextInput
						placeholder="Text Input"
						label="Text Input"
						override={{ marginBottom: '2rem' }}
					/>
					<TextInput
						label="Error"
						error="Invalid email"
						value="Invalid Value"
						override={{ marginBottom: '2rem' }}
					/>
					<Group grow override={{ marginBottom: '1rem' }}>
						<Button>Default</Button>
						<Button disabled>Disabled</Button>
						<Button ripple>Ripple</Button>
					</Group>
					<h3>Switch component</h3>
					<Switch checked label="I agree to sell my privacy" override={{ marginBottom: '2rem' }} />
					<br />
				</div>
				<div class="componentExamplesSectionTwo">
					<NumberInput
						placeholder="Number Input"
						label="Number Input"
						override={{ marginBottom: '2rem', width: '18rem' }}
					/>
					<NativeSelect
						data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']}
						placeholder="Pick one"
						label="Native Select"
						override={{ marginBottom: '1rem', width: '18rem' }}
					/>
					<h3>Chip component</h3>
					<Group override={{ marginBottom: '1rem' }}>
						<Chip>Default</Chip>
						<Chip disabled>Disabled</Chip>
						<Chip variant="filled">Filled</Chip>
					</Group>
					<h3>ActionIcon component</h3>
					<Group>
						{#each variants as variant}
							<ActionIcon color="blue" {variant}><GithubLogo size={16} /></ActionIcon>
						{/each}
					</Group>
				</div>
			</div>
		</Tabs.Tab>
		<Tabs.Tab label="Data Display" class={classes.root} icon={Dashboard}>
			<div class="componentExamplesTabPanel">
				<div class="componentExamplesSectionOne">
					<h3>Badge component</h3>
					<Group override={{ marginBottom: '2rem' }} position="center" grow>
						<Badge size="sm" radius="sm">Badge</Badge>
						<Badge variant="gradient">Gradient</Badge>
					</Group>
					<h3>Timeline component</h3>
					<Group override={{ marginBottom: '2rem' }}>
						<Center>
							<Timeline active={1} bulletSize={24} lineWidth={2}>
								<Timeline.Item bullet={LightningBolt} title="New branch">
									<Text color="dimmed" size="sm">
										Created new branch<Text variant="link" root="span" href="#" inherit
											>fix-notifications</Text
										> from master</Text
									>
									<Text size="xs" override={{ marginTop: '4px' }}>2 hours ago</Text>
								</Timeline.Item>
								<Timeline.Item bullet={Commit} title="Commits">
									<Text color="dimmed" size="sm"
										>Pushed 23 commits to<Text variant="link" root="span" href="#" inherit
											>fix-notifications branch</Text
										></Text
									>
									<Text size="xs" override={{ marginTop: '4px' }}>52 minutes ago</Text>
								</Timeline.Item>
								<Timeline.Item title="Pull request" bullet={GithubLogo} lineVariant="dashed">
									<Text color="dimmed" size="sm"
										>Submitted a pull request<Text variant="link" root="span" href="#" inherit
											>Fix incorrect notification message (#187)</Text
										></Text
									>
									<Text size="xs" override={{ marginTop: '4px' }}>34 minutes ago</Text>
								</Timeline.Item>
								<Timeline.Item title="Code review" bullet={EyeOpen}>
									<Text color="dimmed" size="sm"
										><Text variant="link" root="span" href="#" inherit>Robert Gluesticker</Text> left
										a code review on your pull request</Text
									>
									<Text size="xs" override={{ marginTop: '4px' }}>12 minutes ago</Text>
								</Timeline.Item>
							</Timeline>
						</Center>
					</Group>
				</div>
				<div style="width: 25rem">
					<h3>Card component</h3>
					<Card shadow="sm" p="lg">
						<Card.Section first padding="lg">
							<Image
								src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
								height="160"
								alt="Portugal"
							/>
						</Card.Section>

						<Group override={{ marginBottom: '10px', marginTop: '$smPX' }}>
							<Text>Portugal Porto Adventures</Text>
						</Group>

						<Text size="sm" override={{ lineHeight: 1.5 }}>
							With Portugal Porto Adventures you can explore more of the beautiful Portuguese
							cities, by walking on foot, meeting the locals and eating excellent food and wine
						</Text>

						<Button variant="light" color="blue" fullSize override={{ marginTop: '14px' }}>
							Book classic tour now
						</Button>
					</Card>
				</div>
			</div>
		</Tabs.Tab>
		<Tabs.Tab label="Feedback" class={classes.root} icon={ExclamationTriangle}>
			<div class="componentExamplesTabPanel">
				<div class="componentExamplesSectionOne">
					<h3>Alert component</h3>
					<Alert icon={InfoCircled} title="Oopsie!" override={{ marginBottom: '2rem' }}>
						Seems like our servers (actually a single Raspberry pi) crashed. Please wait while our
						underpaid worker tries to solder the CPU again.
					</Alert>
					<h3>Loader component</h3>
					<Group override={{ marginBottom: '2rem' }} position="center">
						<Loader variant="circle" />
						<Loader variant="dots" />
						<Loader variant="bars" />
					</Group>
					<h3>Progress component</h3>
					<Progress size="xl" animate {value} tween tweenOptions={{ duration: 250 }} />
					<Group override={{ paddingTop: '1rem' }} position="center">
						<Button on:click={() => changeProgressValue('increment')}>+</Button>
						<Button on:click={() => changeProgressValue('decrement')}>-</Button>
					</Group>
				</div>
				<div class="componentExamplesSectionTwo">
					<h3>Notification component</h3>
					<Notification title="Default notification" override={{ marginBottom: '2rem' }}>
						This is the default notification with a title and a body
					</Notification>
					<h3>Skeleton component</h3>
					<Skeleton height={50} circle mb="xl" override={{ marginBottom: '24px' }} />
					<Skeleton height={8} radius="xl" />
					<Skeleton height={8} radius="xl" override={{ marginTop: '8px' }} />
					<Skeleton height={8} width="70%" radius="xl" override={{ marginTop: '8px' }} />
				</div>
			</div>
		</Tabs.Tab>
		<Tabs.Tab label="Overlays" class={classes.root} icon={Stack}>
			<div class="componentExamplesTabPanel">
				<div class="componentExamplesSectionOne">
					<h3>Overlays</h3>
					<Group override={{ marginBottom: '2rem' }}>
						<Modal
							opened={modalOpened}
							on:close={() => (modalOpened = false)}
							title="This is a modal!"
						>
							<Group position="center">
								<p>Hope you liked it!</p>
							</Group>
						</Modal>

						<Group position="center">
							<Button on:click={() => (modalOpened = true)}>Open Modal</Button>
						</Group>

						<Tooltip label="Label">
							<Button>With tooltip</Button>
						</Tooltip>
					</Group>
					<h3>Popper component</h3>
					<Button bind:element={reference} on:click={toggleMount}>Show popper</Button>
					<Popper
						override={{ '& .arrow': { backgroundColor: '$gray100' } }}
						{reference}
						{popperMounted}
            position="bottom"
					>
						<Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
							<Center>Popper content</Center>
						</Box>
					</Popper>
				</div>
				<div class="componentExamplesSectionTwo">
					<h3>Menu component</h3>
					<Menu>
						<Menu.Label>Application</Menu.Label>
						<Menu.Item icon={Gear}>Settings</Menu.Item>
						<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
						<Menu.Item icon={MagnifyingGlass}>
							<svelte:fragment slot="rightSection">
								<Text size="xs" color="dimmed">⌘K</Text>
							</svelte:fragment>
							Search
						</Menu.Item>

						<Divider />

						<Menu.Label>Danger zone</Menu.Label>
						<Menu.Item color="red" icon={Trash}>Delete my account</Menu.Item>
					</Menu>
				</div>
			</div>
		</Tabs.Tab>
    <Tabs.Tab label="Dates" class={classes.root} icon={Calendar}>
			<div class="componentExamplesTabPanel">
				<div class="componentExamplesSectionOne">
          <h3>Month component</h3>
          <Month firstDayOfWeek="sunday" bind:value={monthValue} month={monthValue} onChange={(val) => (monthValue = val)} />
        </div>
			</div>
		</Tabs.Tab>
	</Tabs>
</div>

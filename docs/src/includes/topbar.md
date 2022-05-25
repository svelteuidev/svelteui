<script>
    import { ActionIcon } from '@svelteuidev/core'
    import { GithubLogo } from 'radix-icons-svelte'
    import { Device, mobile } from 'components'
    import Discord from '../components/svgs/Discord.svelte'
    import Opengraph from './opengraph.svelte';

    const discordLogo = {
        bc: '#6875f5',
        '&:hover': {
            bc: '#5850ec'
        }
    }

    import { current_page } from '@svelte-docs/get/routes';
	import maintitle from '@svelte-docs/get/maintitle';

	let description =
		'A Svelte library with a variety of components, actions, transition and utility functions!';
	let img = 'https://svelteui.org/static/new-banner.png';
	$: title = $current_page.title ? $current_page.title + ' | ' + maintitle : maintitle;
	$: url = `https://svelteui.org/${$current_page.url}`;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image:secure_url" content={img} />
	<meta property="og:image:secure" content={img} />
	<meta property="og:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Device />

<div style={`padding-right: ${$mobile ? '0rem' : '0.75rem'}; padding-top: ${$mobile ? '0rem' : '0.75rem'}`}>

- [<ActionIcon override={discordLogo} size='xl' color='blue' variant='filled'><Discord size={25} /></ActionIcon>](https://discord.gg/2J2xmzCS79)
- [<ActionIcon size='xl' color='dark' variant='outline'><GithubLogo size={25} /></ActionIcon>](https://github.com/svelteuidev/svelteui)

</div>

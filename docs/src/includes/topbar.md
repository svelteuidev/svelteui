<script>
    import { ActionIcon } from '@svelteuidev/core'
    import { GithubLogo } from 'radix-icons-svelte'
    import { Device } from 'components'
    import Discord from '../components/svgs/Discord.svelte'
    import Opengraph from './opengraph.svelte';

    const discordLogo = {
        bc: '#6875f5',
        '&:hover': {
            bc: '#5850ec'
        }
    }
</script>

<Opengraph />
<Device />

- [<ActionIcon override={discordLogo} size='xl' color='blue' variant='filled'><Discord size={25} /></ActionIcon>](https://discord.gg/2J2xmzCS79)
- [<ActionIcon size='xl' color='dark' variant='outline'><GithubLogo size={25} /></ActionIcon>](https://github.com/svelteuidev/svelteui)

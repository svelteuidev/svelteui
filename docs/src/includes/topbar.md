<script>
    import { Switch, ActionIcon, Center } from '@svelteuidev/core'
    import { DiscordLogo, GithubLogo } from 'radix-icons-svelte'
    import Discord from '../components/svgs/Discord.svelte'

    const discordLogo = {
        bc: '#6875f5',
        '&:hover': {
            bc: '#5850ec'
        }
    }
</script>

- [Documentation](introduction)
- [<ActionIcon override={discordLogo} size='lg' color='blue' variant='filled'><Discord size={20} /></ActionIcon>](https://discord.gg/2J2xmzCS79)
- [<ActionIcon size='lg' color='dark' variant='outline'><GithubLogo size={20} /></ActionIcon>](https://github.com/svelteuidev/svelteui)

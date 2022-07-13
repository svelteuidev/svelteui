<script>
    import { ActionIcon, Tooltip, colorScheme } from '@svelteuidev/core'
    import { GithubLogo, Sun, Moon } from 'radix-icons-svelte'
    import { Device, mobile } from 'components'
    import Discord from '../components/svgs/Discord.svelte';

    const discordLogo = {
        bc: '#6875f5',
        '&:hover': {
            bc: '#5850ec'
        }
    }

    function toggleTheme() {
		colorScheme.update((v) => v === 'light' ? 'dark' : 'light')
	}
</script>


<Device />

<div style={`padding-right: ${$mobile ? '0rem' : '0.75rem'}; padding-top: ${$mobile ? '0rem' : '0.75rem'}`}>

- [<Tooltip withArrow label='Discord'><ActionIcon override={discordLogo} size='xl' color='blue' variant='filled'><Discord size={25} /></ActionIcon></Tooltip>](https://discord.gg/2J2xmzCS79)
- [<Tooltip withArrow label='GitHub'><ActionIcon size='xl' color='dark' variant='outline'><GithubLogo size={25} /></ActionIcon></Tooltip>](https://github.com/svelteuidev/svelteui)
- <Tooltip withArrow label='Experimental Theme Toggle'>
    <ActionIcon size='xl' color='dark' variant='outline' on:click={toggleTheme}>
        {#if $colorScheme === 'light'}
            <Moon size={25} />
        {:else}
            <Sun size={25} />
        {/if}
    </ActionIcon>
  </Tooltip>

</div>
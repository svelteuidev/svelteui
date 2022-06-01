<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

    export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {};
</script>

<script lang="ts">
	import { Badge, Center, SimpleGrid, Tooltip } from '@svelteuidev/core';
</script>

<Center>
    <SimpleGrid cols={3}>
        <Tooltip position='top' placement='start' label='top-start'>
            <Badge>top-start</Badge>
        </Tooltip>
        <Tooltip position='top' placement='center' label='top-center'>
            <Badge>top-center</Badge>
        </Tooltip>
        <Tooltip position='top' placement='end' label='top-end'>
            <Badge>top-end</Badge>
        </Tooltip>
        <Tooltip position='right' placement='start' label='right-start'>
            <Badge>right-start</Badge>
        </Tooltip>
        <Tooltip position='right' placement='center' label='right-center'>
            <Badge>right-center</Badge>
        </Tooltip>
        <Tooltip position='right' placement='end' label='right-end'>
            <Badge>right-end</Badge>
        </Tooltip>
        <Tooltip position='bottom' placement='start' label='bottom-start'>
            <Badge>bottom-start</Badge>
        </Tooltip>
        <Tooltip position='bottom' placement='center' label='bottom-center'>
            <Badge>bottom-center</Badge>
        </Tooltip>
        <Tooltip position='bottom' placement='end' label='bottom-end'>
            <Badge>bottom-end</Badge>
        </Tooltip>
        <Tooltip position='left' placement='start' label='left-start'>
            <Badge>left-start</Badge>
        </Tooltip>
        <Tooltip position='left' placement='center' label='left-center'>
            <Badge>left-center</Badge>
        </Tooltip>
        <Tooltip position='left' placement='end' label='left-end'>
            <Badge>left-end</Badge>
        </Tooltip>
    </SimpleGrid>
</Center>


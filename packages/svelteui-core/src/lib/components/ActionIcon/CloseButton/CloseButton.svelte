<script lang="ts">
    import ActionIcon from '../ActionIcon.svelte'
    import CloseIcon from './CloseIcon.svelte'
    import type { SvelteuiNumberSize } from '$lib/styles'

    export let iconSize: SvelteuiNumberSize = 'md'

    const iconSizes = {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
    };
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

CloseButton is a premade ActionIcon with close icon

@see https://svelteui-docs.vercel.app/docs/core/action-icon
@example
    ```tsx
    <CloseButton /> // standard CloseButton
    ```
-->

<ActionIcon {...$$restProps}>
    <CloseIcon width={iconSizes[iconSize]} height={iconSizes[iconSize]} />
</ActionIcon>
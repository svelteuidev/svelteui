<script lang="ts">
    import { clipboard } from "$lib/use-clipboard/use-clipboard";

    export let text = "This text will be copied";
    export let callback;
    export let callbackError;
</script>
    
<button
    id="clipboard"
    use:clipboard={text}
    on:useclipboard={event => callback(event.detail)}
    on:useclipboard-error={event => callbackError(event.detail)}
>
    Copy Me
</button>

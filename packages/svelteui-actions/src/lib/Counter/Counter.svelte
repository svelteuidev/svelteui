<script lang="ts">
    /** Default value of the counter. */
    export let value: number = 0;

    /** Specifies a custom class name for the outer container. */
    let className = '';
    export { className as class }; // "class" is a reserved namespace in JS
</script>

<!--
@component
A component that controls the value of a given number. Clicking the + button will add one to the number. Clicking the - button will subtract one from the number.

- Usage:
    ```tsx
    <Counter value={0} class="my-custom-class" />
    ```
-->
<div class="counter {className}" {...$$restProps}>
    <button on:click={() => value--}>
        -
    </button>
    <span>
        {value}
    </span>
    <button on:click={() => value++}>
        +
    </button>
</div>

<style lang="scss">
    @use "./Counter";
</style>

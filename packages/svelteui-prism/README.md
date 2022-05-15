# SvelteUI Prism

## **code highlight component built with prism action**

- Package includes the Prism component that is used to give Code highlighting.
- This package depends on the `@svelteuidev/actions` & `@svelteuidev/core` packages, so they will come together!

## Documentation

[See full documentation on the SvelteUI website](https://svelteui.org/)

## Installation

```bash
# With yarn
yarn add @svelteuidev/prism

# With npm
npm install @svelteuidev/prism
```

## Usage

```tsx
<script>
    import { Prism } from '@svelteuidev/prism';

    const code = `
    const obj = {
        name: "Josh",
        age: "age"
    }
    `
</script>

<Prism lineNumbers {code} />
```

## License

All SvelteUI packages have MIT license.

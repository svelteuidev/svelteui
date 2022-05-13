# SvelteUI Prism

## **code highlight component built with prism action**

- Package includes the Prism component that is used to give Code highlighting.
- This package relies on the `@svelteuidev/actions` & `@svelteuidev/core` packages, so they will come together!

## Documentation

[See full documentation on svelteui website](https://svelteuidev.github.io/svelteui/)

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

<Prism block message={code}>{code}</Prism>;
```

## License

All SvelteUI packages have MIT license. All SvelteUI dependencies also have MIT license.

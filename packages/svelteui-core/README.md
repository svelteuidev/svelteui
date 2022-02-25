# SvelteUI core

SvelteUI allows you to create fully functional and accessible web applications in less time than ever before. Regardless of design experience.
A variety of components, actions, and utility functions are on the way!

## Installation

```sh
# With yarn
yarn add @svelteuidev/core

# With npm
npm install @svelteuidev/core
```

## Usage

First add this to your `svelte.config.js` file

```tsx
kit: {
    adapter: adapter(),

    vite: {
        ssr: {
            noExternal: ['@svelteuidev/core']
        }
    },
},
```

Now you can import and use any component from @svelteuidev/core:

```tsx
import { Button } from '@svelteuidev/core';

<Button>Submit</Button>;
```

## License

All SvelteUI packages have MIT license. All SvelteUI dependencies also have MIT license.

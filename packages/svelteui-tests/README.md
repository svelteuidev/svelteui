# SvelteUI Tests

This package is a helper package that is used to test SvelteUI components. It is not published.

## itSupportsClassName

Checks if component sets given className on root element. itSupportsClassName accepts 2 arguments: component and required component props.

```tsx
import { itSupportsClassName } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('Button', () => {
	itSupportsClassName(Button);
});
```

## License

All svelteui packages have MIT license. All svelteui dependencies also have MIT license.

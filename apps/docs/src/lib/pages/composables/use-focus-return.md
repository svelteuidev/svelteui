---
title: 'use-focus-return'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus-return/
description: 'Capture last focused element on the page and return focus to it once condition is met'
import: "import { useFocusReturn } from '@svelteuidev/composables';"
docs: 'composables/use-focus-return.md'
source: 'svelteui-composables/src/utilities/use-focus-return/use-focus-return.ts'
---

<script lang='ts'>
    import { Heading } from 'components'
</script>

<Heading />

## Usage

`useFocusReturn` returns function to automatically manages focus returning to last focused element when given condition is met. For example it is used in Modal component to restore focus after modal was closed.

In most cases you would want to use this with `use-focus-trap`.
```ts
const { handleFocusReturn } = useFocusReturn();

let opened = false;

// when opened changes to true it will automatically remember last focused element
// when opened changes to false it will return focus to last focused element before opening
$: handleFocusReturn(opened);
```

If `shouldReturnFocus`(second param) option is set to false you can call `returnFocus` function to focus last active element manually:
```ts
const { handleFocusReturn, returnFocus } = useFocusReturn();

let opened = false;

// when opened changes to true it will automatically remember last focused element
// when opened changes to false it will do nothing because we set second param as false
$: handleFocusReturn(opened, false);

function onClose() {
  // whenever you call this function it will return focus to last focused element
  // which was remembered when handleFocusReturn was called with opened: true
  returnFocus();
}
```

## Definition

```ts
interface useFocusReturnResult {
  handleFocusReturn: (opened: boolean, shouldReturnFocus?: boolean) => void;
  returnFocus: () => void;
}

function useFocusReturn(): useFocusReturnResult
```

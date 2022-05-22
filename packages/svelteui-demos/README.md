# SvelteUI Demos
Contain demos for documentation

## Usage
All demos are located in `src/lib/demos`.

It contains folders for each component which contains different demos for one component.

Each demo is svelte component which renders desired component.

### Main concept
Demo is svelte component which render desired component and export configuration of demo.
```sveltehtml
<!-- script context=module used to export configuration of demo -->
<script lang="ts" context="module">
  /* eslint-disable no-useless-escape */
  import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

  // contains source code which we will show
  const code = `
<script>
  import { Button, Group } from '@svelteuidev/core';
<\/script>

<Group position="center">
  <Button variant="filled">filled</Button>
</Group>`;

  // all demos must export type, it could be 'demo' or 'configurator'
  export const type: CodeDemoType['type'] = 'demo';

  // also, it should export configuration for chosen type of demo
  export const configuration: CodeDemoConfiguration = {
    code
  };
</script>

<!-- Regular svelte component which we will be shown in preview -->
<script lang="ts">
  import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
  <Button variant="filled">filled</Button>
</Group>
```
We need to export it from `index.ts` in the same folder:
```typescript
// should export * as {name_of_demo}
export * as variants from './Button.demo.variants.svelte';
```
After that we will export all demos of one component from `src/lib/index.ts`
```typescript
export * as ButtonsDemo from './demos/Button';
```
And now you will be able to use this demo wherever you want(usually on the documentation website) like that:
```sveltehtml
<script lang="ts">
  import { Demo, ButtonsDemo } from '$lib/index';
</script>

<Demo demo={ButtonsDemo.variants} />
```

## CodeDemo
They are used for showing a simple demo of the component with specific props with the ability to show code.
### Example
```sveltehtml
<!-- script context=module used to export configuration of demo -->
<script lang="ts" context="module">
  /* eslint-disable no-useless-escape */
  import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

  // contains source code which we will show
  const code = `
<script>
  import { Button, Group } from '@svelteuidev/core';
<\/script>

<Group position="center">
  <Button variant="filled">filled</Button>
</Group>`;

  export const type: CodeDemoType['type'] = 'demo';

  export const configuration: CodeDemoConfiguration = {
    code
  };
</script>

<!-- Regular svelte component which we will be shown in preview -->
<script lang="ts">
  import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
  <Button variant="filled">filled</Button>
</Group>
```

### `configuration`
```typescript
interface CodeDemoConfiguration {
  // needed when you want to show
  // the component in preview with restricted width
  // could be useful for <Card> component
  previewMaxWidth?: number;

  // change background of preview section
  previewBackground?: {
    // color for light theme
    light: string;
    // color for dark theme
    dark: string
  };

  // code which will be shown in the code section
  // when not set will show only component preview
  code?: string;

  // show/hide preview paddings
  spacing?: boolean;

  // show toggle code button
  // code will be hidden until user clicks on toggle button
  toggle?: boolean;
}
```

## ConfiguratorDemo
They are used for showing a demo with the ability to change props of the component on the fly.

### Example
```sveltehtml
<!-- script context=module used to export configuration of demo -->
<script lang="ts" context="module">
  import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

  // function which generate source code with props and children
  const codeTemplate = (props: string, children: string) => `
<script>
  import { Button } from '@svelteuidev/core';
<\/script>

<Button${props}>
  ${children}
</Button>
`;

  export const type: ConfiguratorDemoType['type'] = 'configurator';

  export const configuration: ConfiguratorDemoConfiguration = {
    codeTemplate,
    // contains all controls which will change
    // specific properties of component in preview
    configurator: [
      {
        name: 'variant',
        type: 'select',
        data: [
          { label: 'filled', value: 'filled' },
          { label: 'light', value: 'light' },
          { label: 'outline', value: 'outline' },
          { label: 'default', value: 'default' },
          { label: 'white', value: 'white' },
          { label: 'gradient', value: 'gradient' },
          { label: 'subtle', value: 'subtle' }
        ],
        initialValue: 'filled',
        defaultValue: 'filled'
      },
      {
        name: 'color',
        type: 'color',
        initialValue: 'blue',
        defaultValue: 'blue',
        when: { control: 'variant', comparator: '!==', value: 'gradient' }
      },
      {
        name: 'gradient',
        type: 'composite',
        controls: [
          { name: 'from', type: 'color', initialValue: 'indigo', defaultValue: 'indigo' },
          { name: 'to', type: 'color', initialValue: 'cyan', defaultValue: 'cyan' },
          { name: 'deg', type: 'number', initialValue: 45, defaultValue: 45 }
        ],
        when: { control: 'variant', comparator: '===', value: 'gradient' }
      },
      { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
      { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
      { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
      { name: 'ripple', type: 'boolean', initialValue: false, defaultValue: false },
      { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
      {
        name: 'loaderPosition',
        type: 'segmented',
        data: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' }
        ],
        initialValue: 'left',
        defaultValue: 'left',
        when: { control: 'loading', comparator: '===', value: true }
      },
      { name: 'children', type: 'string', initialValue: 'Settings' }
    ]
  };
</script>

<!-- Regular svelte component which we will be shown in preview -->
<script lang="ts">
  import type { ButtonProps } from '@svelteuidev/core';
  import { Button, Center } from '@svelteuidev/core';

  // configurator demos must export props
  export let props: ButtonProps = {};
</script>

<Center>
  <Button {...props}>
    <!-- must have <slot /> if configurator allows 'children' changes -->
    <slot />
  </Button>
</Center>
```

### `configuration`
```typescript
export interface ConfiguratorDemoConfiguration {
  // needed when you want to show
  // the component in preview with restricted width
  // could be useful for <Card> component
  previewMaxWidth?: number;

  // change background of preview section
  previewBackground?: {
    // color for light theme
    light: string;
    // color for dark theme
    dark: string
  };

  // contains any amount of controls which a user
  // will be able to use to change propeties of component
  configurator: ConfiguratorDemoControl[];

  // function which gets properties and children and returns code with them
  codeTemplate?: (props: string, children?: string) => string;

  // when true it will render each prop on new line in code section
  // number means indentation offset for each prop
  // false by default
  multiline?: boolean | number;

  // true means the props string will contain a newline at the end
  // sometimes your code will be already multiline
  // so you maybe don't want to show an additional one
  // true by default
  multilineEndNewLine?: boolean;

  // vertical centering of preview
  // true by default
  center?: boolean;
}
```

### Configurator Controls
```typescript
// all controls will have this properties
interface DemoControlBase<T = any> {
  // name of the property of shown component
  name: string;

  // label of control which will be shown for control. If didn't set then we will show name
  label?: string;

  // initial value of control
  initialValue?: T;

  // default value of the property of shown component
  defaultValue?: T;

  // condition which describe when this control should be shown
  when?: {
    // name of the control from which this control depends
    control: string;

    // how to compare value
    comparator: '===' | '!==';

    // value which will be compared
    value: any;
  };
}

export interface DemoControlBoolean extends DemoControlBase<boolean> {
  type: 'boolean';
}

export interface DemoControlColor extends DemoControlBase<SvelteUIColor> {
  type: 'color';
}

export interface DemoControlSelect extends DemoControlBase<string> {
  type: 'select';
  data: { label: string; value: string }[];
  // will capitalize labels in data array
  // true by default
  capitalize?: boolean;
}

export interface DemoControlString extends DemoControlBase<string> {
  type: 'string';
}

export interface DemoControlSize extends DemoControlBase<SvelteUISize> {
  type: 'size';
}

export interface DemoControlNumber extends DemoControlBase<number> {
  type: 'number';
  min?: number;
  max?: number;
}

export interface DemoControlSegmented extends DemoControlBase<string> {
  type: 'segmented';
  data: { label: string; value: string }[];
  // will capitalize labels in data array
  // true by default
  capitalize?: boolean;
}

// composite uses for object type properties
// it can contain any controls include another composite
export interface DemoControlComposite
  extends Exclude<DemoControlBase<Record<string, any>>, 'initialValue' | 'defaultValue'> {
  type: 'composite';
  controls: DemoControl[];
}
```

## Examples
You can find a bunch of examples in `src/lib/examples` all of them shown in `/examples` route

## TODO
* Replace `<Input>` in `NumberControl.svelte` to `<NumberInput>` when it will be implemented
* Replace `<NativeSelect>` in `SegmentedControl.svelte` to `<Segmented>` when it will be implemented
* Replace `<NativeSelect>` in `SizeControl.svelte` to `<Slider>` when it will be implemented

## License

All SvelteUI packages have MIT license. All SvelteUI dependencies also have MIT license.

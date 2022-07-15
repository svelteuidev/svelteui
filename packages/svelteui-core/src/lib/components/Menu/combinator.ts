/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Menu from './Menu.svelte';
import Item from './MenuItem/MenuItem.svelte';
import Label from './MenuLabel/MenuLabel.svelte';

// combine Menu, MenuItem, and MenuLabel

// @ts-ignore
_Menu.Item = Item;
// @ts-ignore
_Menu.Label = Label;
const Menu = _Menu as typeof _Menu & { Item: typeof Item; Label: typeof Label };

export { Menu };

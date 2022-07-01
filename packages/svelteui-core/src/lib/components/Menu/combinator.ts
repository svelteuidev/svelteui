import _Menu from './Menu.svelte';
import Item from './MenuItem/MenuItem.svelte';

// combine Menu, MenuItem, and MenuLabel
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
_Menu.Item = Item;
const Menu = _Menu as typeof _Menu & { Item: typeof Item };

export { Menu };

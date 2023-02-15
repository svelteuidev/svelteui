/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Breadcrumb from './Breadcrumb.svelte';
import Item from './BreadcrumbItem/BreadcrumbItem.svelte';

// @ts-ignore
_Breadcrumb.Item = Item;
const Breadcrumb = _Breadcrumb as typeof _Breadcrumb & { Item: typeof Item };

export { Breadcrumb };

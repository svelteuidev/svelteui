/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Breadcrumb from './Breadcrumbs.svelte';
import Item from './BreadcrumbsItem/BreadcrumbsItem.svelte';

// @ts-ignore
_Breadcrumb.Item = Item;
const Breadcrumbs = _Breadcrumb as typeof _Breadcrumb & { Item: typeof Item };

export { Breadcrumbs };

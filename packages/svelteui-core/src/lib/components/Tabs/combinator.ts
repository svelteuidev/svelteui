/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Tabs from './Tabs.svelte';
import Tab from './Tab/Tab.svelte';

// @ts-ignore
_Tabs.Tab = Tab;
const Tabs = _Tabs as typeof _Tabs & { Tab: typeof Tab };

export { Tabs };

/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Accordion from './Accordion.svelte';
import AccordionItem from './AccordionItem/AccordionItem.svelte';

// @ts-ignore
_Accordion.Item = AccordionItem;
const Accordion = _Accordion as typeof _Accordion & {
	Item: typeof AccordionItem;
};

export { Accordion };

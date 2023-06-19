/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Accordion from './Accordion.svelte';
import AccordionControl from './AccordionControl/AccordionControl.svelte';
import AccordionItem from './AccordionItem/AccordionItem.svelte';

// @ts-ignore
_Accordion.Control = AccordionControl;
// @ts-ignore
_Accordion.Item = AccordionItem;
const Accordion = _Accordion as typeof _Accordion & {
	Control: typeof AccordionControl;
	Item: typeof AccordionItem;
};

export { Accordion };

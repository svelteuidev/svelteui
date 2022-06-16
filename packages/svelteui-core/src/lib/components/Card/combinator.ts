import _Card from './Card.svelte';
import Section from './CardSection/CardSection.svelte';

// Combine Card and Section
_Card.Section = Section;
const Card = _Card as typeof _Card & { Section: typeof Section };

export { Card };

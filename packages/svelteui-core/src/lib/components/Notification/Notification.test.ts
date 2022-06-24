import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Notification } from './Notification.svelte';

describe('Notification', () => {
	itSupportsClassName(Notification, {});
});

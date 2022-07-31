/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { writable } from 'svelte/store';

export const page = writable({ ...window.location });

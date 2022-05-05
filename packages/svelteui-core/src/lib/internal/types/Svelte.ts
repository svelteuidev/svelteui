import type { Component } from './Component';

export type SvelteNode = Component | keyof HTMLElementTagNameMap;

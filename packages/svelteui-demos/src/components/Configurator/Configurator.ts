import type { ConfiguratorDemoConfiguration } from "$lib/types";
import type { Component } from "@svelteuidev/core";

export interface ConfiguratorProps extends ConfiguratorDemoConfiguration {
    component: Component;
}
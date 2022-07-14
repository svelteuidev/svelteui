import { writable, derived } from 'svelte/store';

export const page = writable(window.location);

const createNavigationStore = () => {
	const currentPath = derived(page, ($page) => $page.pathname);
	const isHomePage = derived(currentPath, ($path) => $path === '/');

	return { currentPath, isHomePage };
};

export const navigation = createNavigationStore();

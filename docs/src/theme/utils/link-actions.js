import { current_page } from '@svelte-docs/get/routes';

export function set_active_link(node) {
	return {
		destroy: current_page.subscribe((page) => {
			node.querySelectorAll('a').forEach((a) => {
				if (a.getAttribute('href') === page.url) a.classList.add('active');
				else a.classList.remove('active');
			});
		})
	};
}

export function outside_click(node, handler) {
	document.body.addEventListener('click', handler);
	return {
		destroy() {
			document.body.removeEventListener('click', handler);
		}
	};
}

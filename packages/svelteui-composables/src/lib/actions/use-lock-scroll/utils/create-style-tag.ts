export function createStyleTag() {
	const tag = document.createElement('style');
	tag.type = 'text/css';
	tag.setAttribute('svelteui-scroll-lock', '');

	return tag;
}

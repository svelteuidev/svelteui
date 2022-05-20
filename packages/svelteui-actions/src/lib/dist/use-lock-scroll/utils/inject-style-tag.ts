export function injectStyles(tag, css): void {
	if (tag.styleSheet) {
		tag.styleSheet.cssText = css;
	} else {
		tag.appendChild(document.createTextNode(css));
	}
}

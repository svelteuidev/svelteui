type Value = {
	node: HTMLElement;
	ariaHidden: string | null;
};

export function createAriaHider(containerNode: HTMLElement) {
	const hiddenDomNodes: Value[] = [];

	gatherOutsideDomNodes(containerNode);
	hiddenDomNodes.map(({ node }) => {
		node.setAttribute('aria-hidden', 'true');
	});

	function gatherOutsideDomNodes(currentElement: HTMLElement): HTMLElement | undefined {
		// 1. Start at the current element (begins with the container element).
		// 2. Hide all sibling elements that are not already aria-hidden.
		// 3. Go up one level to the parent element.
		// 4. Repeat steps 2-3 until you reach the `html` element.

		if (!currentElement) {
			return undefined;
		}

		if (currentElement !== document.querySelector('body')) {
			const parentElement = currentElement.parentElement as HTMLElement;
			const siblingElements = [...(Array.from(parentElement.children) as HTMLElement[])];
			siblingElements.forEach((node) => {
				const ariaHidden = node.getAttribute('aria-hidden');
				if (
					node !== currentElement &&
					node.nodeName !== 'SCRIPT' &&
					(ariaHidden === null || ariaHidden === 'false')
				) {
					hiddenDomNodes.push({ node, ariaHidden });
				}
			});

			gatherOutsideDomNodes(parentElement);
		}
	}

	return () => {
		hiddenDomNodes.forEach((item) => {
			if (!item) {
				return;
			}

			if (item.ariaHidden === null) {
				item.node.removeAttribute('aria-hidden');
			} else {
				item.node.setAttribute('aria-hidden', item.ariaHidden);
			}
		});
	};
}

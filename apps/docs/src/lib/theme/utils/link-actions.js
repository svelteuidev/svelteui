// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function outside_click(node, options) {
	const { handler } = options;
	const HTMLCollection = node.children[1].children;
	let runner;

	return {
		update(newOptions) {
			const { detail } = newOptions;
			if (typeof detail !== 'undefined') {
				runner = detail.expand;
				Object.values(HTMLCollection).forEach((category) => {
					if (runner) {
						const categoryChild = category.children?.[1]?.children;
						const sectionWithTitle = typeof categoryChild?.[0]?.children?.[1] !== 'undefined';
						const sectionWithoutTitle = typeof categoryChild?.[0]?.children?.[1] === 'undefined';

						if (sectionWithTitle) {
							/** Will attach an event listener to each link that will listen for a click event
							 * we need to loop through twice because the clickable links are nested in a title section */
							const sectionLinkList = Array.from(categoryChild);

							for (const link of sectionLinkList) {
								const section = Array.from(link?.children?.[1]?.children);
								for (const link of section) {
									link?.addEventListener('click', handler);
								}
							}
						} else if (sectionWithoutTitle) {
							/** Will attach an event listener to each link that will listen for a click event
							 * we only need to loop through once on links with no title section */
							if (typeof categoryChild !== 'undefined') {
								const section = Array.from(categoryChild);

								for (const link of section) {
									link?.addEventListener('click', handler);
								}
							}
						}
					}
				});
			}
		},
		destroy() {
			Object.values(HTMLCollection).forEach((category) => {
				const categoryChild = category.children?.[1]?.children;
				const sectionWithTitle = typeof categoryChild?.[0]?.children?.[1] !== 'undefined';
				const sectionWithoutTitle = typeof categoryChild?.[0]?.children?.[1] === 'undefined';

				if (sectionWithTitle) {
					/** Will attach an event listener to each link that will listen for a click event
					 * we need to loop through twice because the clickable links are nested in a title section */
					const sectionLinkList = Array.from(categoryChild);

					for (const link of sectionLinkList) {
						const section = Array.from(link?.children?.[1]?.children);
						for (const link of section) {
							link?.removeEventListener('click', handler);
						}
					}
				} else if (sectionWithoutTitle) {
					/** Will attach an event listener to each link that will listen for a click event
					 * we only need to loop through once on links with no title section */
					if (typeof categoryChild !== 'undefined') {
						const section = Array.from(categoryChild);

						for (const link of section) {
							link?.removeEventListener('click', handler);
						}
					}
				}
			});
		}
	};
}

export function clipboard(node, text) {
    const click = async () => {
        if (text)
            try {
                await navigator.clipboard.writeText(text);
                node.dispatchEvent(new CustomEvent('useclipboard', { detail: text }));
            }
            catch (e) {
                node.dispatchEvent(new CustomEvent('useclipboard-error', { detail: e }));
            }
    };
    node.addEventListener('click', click, true);
    return {
        update: (t) => (text = t),
        destroy: () => node.removeEventListener('click', click, true)
    };
}

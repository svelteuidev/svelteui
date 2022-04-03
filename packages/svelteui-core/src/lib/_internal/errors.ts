/** This is a temporary solution to error handling
 * A more robust solution will be created later
 * */

// need a workaround to this, cannot import browser from $app/env as of now
const isBrowser = () => typeof window !== 'undefined';
const browser = isBrowser();

const style: HTMLStyleElement = browser ? document.createElement('style') : undefined;

if (browser) {
	style.textContent = `
    .modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}
    `;
	style.id = 'svelteui-inject';
}

export function UserException(component: string, message: string, solution?: string) {
	if (browser) document.head.appendChild(style);
	const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ''}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss.</h3>
        </div>
    </div>        
    `;
	return html;
}

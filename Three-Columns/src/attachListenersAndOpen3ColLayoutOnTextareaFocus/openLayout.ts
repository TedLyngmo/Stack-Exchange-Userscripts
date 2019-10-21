import { createToggleButton } from './createToggleButton';
import * as postRootState from './postRootState';

export const openLayout = (newPostRoot: HTMLElement) => {
    const textarea = newPostRoot.querySelector('textarea.wmd-input') as HTMLTextAreaElement;
    // Remove rows attribute so that the height: 100% in the CSS can take effect:
    textarea.removeAttribute('rows');
    // If "Enter 3-column layout" was just pressed, the textarea won't be focused, so focus it:
    textarea.focus();
    newPostRoot.setAttribute('data-three-columns-userscript-post-root', '');
    const toggleButton = newPostRoot.querySelector('button[data-three-columns-userscript-toggle]');
    if (!toggleButton) {
        createToggleButton(newPostRoot, openLayout);
    } else {
        toggleButton.textContent = 'Close 3-column layout';
    }
    document.documentElement.setAttribute('data-three-columns-userscript', '');
    postRootState.set(newPostRoot);
};
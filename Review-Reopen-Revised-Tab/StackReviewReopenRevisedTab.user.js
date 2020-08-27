// ==UserScript==
// @name             Stack Review Reopen Revised Tab
// @description      In Reopen Votes, automatically go to the "Revised" tab
// @author           CertainPerformance
// @namespace        https://github.com/CertainPerformance/Stack-Exchange-Userscripts
// @version          1.0.3
// @include          /^https://(?:[^/]+\.)?(?:(?:stackoverflow|serverfault|superuser|stackexchange|askubuntu|stackapps)\.com|mathoverflow\.net)/review/reopen(?!/stats|/history)/
// @grant            none
// ==/UserScript==

'use strict';

window.$(document).on('ajaxComplete', (event, jqXHR, { url }) => {
    if ((url.startsWith('/review/next-task') || url.startsWith('/review/task-reviewed/')) && jqXHR.responseJSON.reviewTaskId) {
        const revisedTabAnchor = document.querySelector('a[id^="reviewable-post-"]');
        if (revisedTabAnchor) {
            revisedTabAnchor.click();
        }
    }
});

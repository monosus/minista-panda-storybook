window.addEventListener('htmx:beforeSend', function(evt) {
    const charsetChangeTarget = evt.detail.pathInfo.requestPath
    // if (charsetChangeTarget.endsWith('.html')) {
    evt.detail.xhr.overrideMimeType('text/html;charset=Shift_JIS');
    // }
});
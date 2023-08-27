window.addEventListener('htmx:beforeSend', function (evt) {
  const detail = (evt as CustomEvent).detail;
  // const charsetChangeTarget = detail.pathInfo.requestPath
  // if (charsetChangeTarget.endsWith('.html')) {
  detail.xhr.overrideMimeType('text/html;charset=Shift_JIS');
  // }
});

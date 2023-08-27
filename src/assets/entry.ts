import './modules/override'
import observeBodyChanges from './modules/test';
import './modules/usingCssHas'
import 'htmx.org'
const nowLocation = (): void => {
  console.log(window.location.href);
  console.log(document.title);
};

observeBodyChanges(nowLocation);

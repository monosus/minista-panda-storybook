import observeBodyChanges from './modules/test';

const nowLocation = (): void => {
  console.log(window.location.href);
  console.log(document.title);
};

observeBodyChanges(nowLocation);

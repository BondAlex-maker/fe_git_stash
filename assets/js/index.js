'use strict';


let timeoutID = null;

document.addEventListener('mousemove', (e) => {
  if (timeoutID){
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    location.assign(`${location.origin}/pages/authorization/login.html`);
  }, 4000)
});

const [backHistoryButton, forwardHistoryButton] = document.getElementsByTagName('button');

backHistoryButton.onclick = () => history.back();
forwardHistoryButton.onclick = () => history.forward();


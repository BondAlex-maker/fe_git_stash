'use strict';

const formElem = document.forms[0];

formElem.oninvalid = () => {
  alert("invalid!")
};

formElem.onsubmit = () => {

  const userFields = ['email', 'password'];
  const user = {

  };
  for(let prop of userFields){
    user[prop] = formElem[prop].value;

  }

  localStorage.setItem('user', JSON.stringify(user));

  location.replace(location.origin);
  history.back();


  return false;
};
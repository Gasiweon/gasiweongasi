"use strict";

  id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginbutton = document.querySelector("#button");

  loginbutton.addEventListener("click",login);

  function login() {
    const req = {
    id: id.vlaue,
    password: password.vlaue,
    };
    
  }
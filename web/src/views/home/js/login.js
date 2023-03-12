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
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
      if(res,success) {
      location.href = "/";
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
  console.error(new Error("로그인중 에러 발생"));
    });

  }
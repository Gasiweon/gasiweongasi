"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body;
const { id, password } = UserStorage.getUsers(body.id);
if (id) {
if (id === body.id && password === body.password) {
    return { success : true};
}
return { success:false, msg: "아이디 혹은 비밀번호가 틀렸습니다."};
}
return { success:false, msg: "아이디 혹은 비밀번호가 틀렸습니다." };
}
}
module.export = User;
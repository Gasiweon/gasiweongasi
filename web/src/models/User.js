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
return { success:false, msg: "���̵� Ȥ�� ��й�ȣ�� Ʋ�Ƚ��ϴ�."};
}
return { success:false, msg: "���̵� Ȥ�� ��й�ȣ�� Ʋ�Ƚ��ϴ�." };
}
}
module.export = User;
"use strict";

class UserStorage {
    static #users = {

    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
    if (users.hasOwnproperty(field)) {
    newUsers[field] = users[field];
    }
    return newUsers;
        }, {});
        return newUsers;
    }

           static getUsersinfo(id) {
            const users = this.#users;
            const idx = users.id.indexOf(id);
            const usersKeys =  Object.keys(users);
            const usersinfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }); 

            return usersinfo;
}
}

module.exports = UserStorage
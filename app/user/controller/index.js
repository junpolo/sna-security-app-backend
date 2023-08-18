"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
var MOCK_USERS = [
    { id: 1, name: "Ahmed Singh" },
    { id: 2, name: "Khadaffy Janjalani" },
    { id: 3, name: "Mohammed Flengs" },
];
function getUsers(request, response) {
    return response.json({ users: MOCK_USERS });
}
exports.getUsers = getUsers;
function getUser(request, response) {
    var user = MOCK_USERS.find(function (u) { return u.id === +request.params.id; });
    return response.json({ user: user });
}
exports.getUser = getUser;

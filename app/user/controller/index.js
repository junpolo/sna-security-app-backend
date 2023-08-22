"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
var MOCK_USERS = [
    { id: 1, name: "Ahmed Singh" },
    { id: 2, name: "Khadaffy Janjalani" },
    { id: 3, name: "Mohammed Flengs" },
];
function getUsers(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    return response.json({ users: MOCK_USERS });
}
exports.getUsers = getUsers;
function getUserById(request, response) {
    var user = MOCK_USERS.find(function (u) { return u.id === +request.params.id; });
    return response.json({ user: user });
}
exports.getUserById = getUserById;
function registerUser(request, response) {
    return response.json({ message: "User created!" });
}
exports.registerUser = registerUser;
function login(request, response) {
    return response.json({ message: "User logged in!" });
}
exports.login = login;

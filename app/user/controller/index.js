"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
var data_access_1 = require("../../data/data-access");
var MOCK_USERS = [
    { id: 1, email: "ahmed@domain.com", password: "123" },
    {
        id: 2,
        email: "khadaffy@domain.com",
        password: "123",
    },
    {
        id: 3,
        email: "flengs@domain.com",
        password: "123",
    },
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
    var _a = request.body, email = _a.email, password = _a.password;
    var userData = {
        email: email,
        password: password,
    };
    (0, data_access_1.createUser)(userData);
    return response.json({ message: "User created!" });
}
exports.registerUser = registerUser;
function login(request, response) {
    return response.json({ message: "User logged in!" });
}
exports.login = login;

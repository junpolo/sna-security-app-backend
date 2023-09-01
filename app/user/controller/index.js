"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
var data_access_1 = require("../../data/data-access");
var auth_validation_1 = require("../validations/auth.validation");
var data_access_2 = require("../../data/data-access");
var utils_1 = require("../../shared/utils");
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
    var hashedPassword = (0, utils_1.hashPassword)(password);
    var userData = {
        email: email,
        password: hashedPassword,
    };
    var validationStatus = (0, auth_validation_1.validateSignup)(userData);
    if (validationStatus !== true) {
        return response.status(400).send(__assign({}, validationStatus));
    }
    (0, data_access_1.createUser)(userData);
    return response.json({ message: "User created!" });
}
exports.registerUser = registerUser;
function login(request, response) {
    var _a = request.body, email = _a.email, password = _a.password;
    var user = (0, data_access_2.getUser)(email);
    if (!user || !(0, utils_1.verifyPassword)(password, user.password))
        return response.status(403).send({ message: "Invalid Credentials" });
    return response.json({ message: "Login Success" });
}
exports.login = login;

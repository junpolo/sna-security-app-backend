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
exports.getUser = exports.createUser = exports.getUsers = void 0;
var utils_1 = require("../shared/utils");
var fs = require("fs");
var USERS_FILE = "./app/data/users.json";
function ensureUserFile() {
    if (fs.existsSync(USERS_FILE))
        return;
    fs.appendFileSync(USERS_FILE, ' {"users": []}');
}
function getUsers() {
    ensureUserFile();
    var file = fs.readFileSync(USERS_FILE);
    var fileContent = file.toString();
    var users = JSON.parse(fileContent).users;
    return users;
}
exports.getUsers = getUsers;
function createUser(user) {
    var users = getUsers();
    var newId = (0, utils_1.newGuid)();
    users.push(__assign({ id: newId }, user));
    var newUsers = JSON.stringify({ users: users });
    fs.writeFileSync(USERS_FILE, newUsers);
}
exports.createUser = createUser;
function getUser(email) {
    var users = getUsers();
    var validUser = users.find(function (u) { return u.email === email; });
    return validUser;
}
exports.getUser = getUser;

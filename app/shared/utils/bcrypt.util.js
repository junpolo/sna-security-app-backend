"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
var bcryptjs_1 = require("bcryptjs");
function hashPassword(password) {
    var salt = (0, bcryptjs_1.genSaltSync)(12);
    var hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
    return hashedPassword;
}
exports.hashPassword = hashPassword;
function verifyPassword(passwordAttempted, hashedPassword) {
    return (0, bcryptjs_1.compareSync)(passwordAttempted, hashedPassword);
}
exports.verifyPassword = verifyPassword;

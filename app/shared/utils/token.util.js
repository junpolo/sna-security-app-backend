"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function createToken(user) {
    var payload = { id: user.id, email: user.email };
    var secret = process.env["SECRET"];
    return (0, jsonwebtoken_1.sign)(payload, secret, {
        algorithm: "HS256",
        expiresIn: "5m",
    });
}
exports.createToken = createToken;

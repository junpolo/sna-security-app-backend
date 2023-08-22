"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignup = void 0;
function validateSignup(user) {
    if (user.email !== "" && user.password !== "")
        return true;
    var message = "";
    if (user.email === "") {
        message += "Email";
    }
    if (user.password === "") {
        message += message === "" ? "Password" : " and Password";
    }
    message += " is required";
    return { status: "Signup Error", message: message };
}
exports.validateSignup = validateSignup;

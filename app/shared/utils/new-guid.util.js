"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newGuid = void 0;
var newGuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.newGuid = newGuid;

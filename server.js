"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var express_jwt_1 = require("express-jwt");
var controller_1 = require("./app/user/controller");
var app = express();
var jwtCheckMiddleware = (0, express_jwt_1.expressjwt)({
    secret: process.env["SECRET"],
    algorithms: ["HS256"],
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 8080;
var router = express.Router();
// POST
router.post("/register", controller_1.registerUser);
router.post("/login", controller_1.login);
// GET
router.get("/users", jwtCheckMiddleware, controller_1.getUsers);
router.get("/users/:id", jwtCheckMiddleware, controller_1.getUserById);
app.use("/api", router);
app.listen(port);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var controller_1 = require("./app/user/controller");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 8080;
var router = express.Router();
// POST
router.post("/register", controller_1.registerUser);
router.post("/login", controller_1.login);
// GET
router.get("/users", controller_1.getUsers);
router.get("/users/:id", controller_1.getUserById);
app.use("/api", router);
app.listen(port);

require("dotenv").config();
import * as express from "express";
import { Express, Router, Request, Response } from "express";
import * as bodyParser from "body-parser";
import { expressjwt } from "express-jwt";

import {
  getUsers,
  getUserById,
  registerUser,
  login,
} from "./app/user/controller";

const app: Express = express();

const jwtCheckMiddleware = expressjwt({
  secret: process.env["SECRET"],
  algorithms: ["HS256"],
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router: Router = express.Router();

// POST
router.post("/register", registerUser);
router.post("/login", login);

// GET
router.get("/users", jwtCheckMiddleware, getUsers);
router.get("/users/:id", jwtCheckMiddleware, getUserById);

app.use("/api", router);

app.listen(port);

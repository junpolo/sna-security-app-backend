import * as express from "express";
import { Express, Router, Request, Response } from "express";
import * as bodyParser from "body-parser";

import { getUsers, getUserById } from "./app/user/controller";

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router: Router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

app.use("/api", router);

app.listen(port);

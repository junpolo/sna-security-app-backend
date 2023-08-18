import * as express from "express";
import { Express, Router, Request, Response } from "express";

import { getUsers, getUserById } from "./app/user/controller";

const app: Express = express();

const port = 8080;

const router: Router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

app.use("/api", router);

app.listen(port);

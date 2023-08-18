import express from "express";
import { Express, Router, Request, Response } from "express";

const app: Express = express();

const port = 8080;

const router: Router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.json({ message: "Yespls" });
});

app.use("/api", router);

app.listen(port);

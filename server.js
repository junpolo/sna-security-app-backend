import express from "express";
const app = express();
const port = 8080;
const router = express.Router();
router.get("/", (request, response) => {
    response.json({ message: "Yespls" });
});
app.use("/api", router);
app.listen(port);

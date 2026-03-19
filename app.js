import express from "express";
import path from "path";

import indexRouter from "./routes/indexRouter.js";
import addMessageRouter from "./routes/addMessageRouter.js";

const __dirname = path.resolve();

const app = express();

const PORT = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", addMessageRouter);
app.use("/", indexRouter);

app.listen(PORT, (err/*: any*/) => err ? console.log(err) : console.log(`Listening on port ${PORT}\n`));
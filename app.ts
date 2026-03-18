import express from "express";
import path from "path"

import {indexRouter} from "./routes/indexRouter.ts";
import {addMessageRouter} from "./routes/addMessageRouter.ts";

const app = express();
const __dirname = path.resolve();

const PORT = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", addMessageRouter);
app.use("/", indexRouter);

app.listen(PORT, err => err ? console.log(err) : console.log(`Listening on port ${PORT}\n`));
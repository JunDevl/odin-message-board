import { Router } from "express";
import getMessages from "../controllers/getMessages.ts";
import showMessage from "../controllers/showMessage.ts";

const indexRouter = Router();

indexRouter.get("/", getMessages)

indexRouter.get("/:messageID", showMessage);

export {indexRouter};
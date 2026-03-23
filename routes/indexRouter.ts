import { Router } from "express";
import getMessages from "../controllers/getMessages.js";
import showMessage from "../controllers/showMessage.js";

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:messageID", showMessage);

export default indexRouter;
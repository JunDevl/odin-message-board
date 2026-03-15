import { Router } from "express";
import getMessages from "../controllers/getMessages.ts";

const indexRouter = Router();

indexRouter.get("/", getMessages)

export default indexRouter;
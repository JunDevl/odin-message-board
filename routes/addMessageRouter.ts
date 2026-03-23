import { Router } from "express";
import createMessage from "../controllers/createMessage.ts";

const addMessageRouter = Router();

addMessageRouter.get("/", (_, res) => {
  res.render("form");
});
addMessageRouter.post("/", createMessage);

export default addMessageRouter;
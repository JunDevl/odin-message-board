import { Router } from "express";
import createMessage from "../controllers/createMessage.ts";

const addMessageRouter = Router();

addMessageRouter.get("/", (req, res) => {
  res.render("form");
})
addMessageRouter.post("/", createMessage);

export default addMessageRouter;
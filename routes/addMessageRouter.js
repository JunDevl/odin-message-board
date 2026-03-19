import { Router } from "express";
import createMessage from "../controllers/createMessage.js";

const addMessageRouter = Router();

addMessageRouter.get("/", (_/*: any*/, res/*: any*/) => {
  res.render("form");
});
addMessageRouter.post("/", createMessage);

export default addMessageRouter;
const { Router } = require("express");
const createMessage = require("../controllers/createMessage");

const addMessageRouter = Router();

addMessageRouter.get("/", (_/*: any*/, res/*: any*/) => {
  res.render("form");
});
addMessageRouter.post("/", createMessage);

module.exports = addMessageRouter;
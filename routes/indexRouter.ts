const {Router} = require("express");
const getMessages = require("../controllers/getMessages.ts");
const showMessage = require("../controllers/showMessage.ts");

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:messageID", showMessage);

module.exports = indexRouter;
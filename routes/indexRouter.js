const {Router} = require("express");
const getMessages = require("../controllers/getMessages");
const showMessage = require("../controllers/showMessage");

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:messageID", showMessage);

module.exports = indexRouter;
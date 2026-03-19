const DB = require("../models/messages.ts");

const showMessage = async (req: any, res:any) => {
  const messageID = Number(req.params["messageID"]);

  if (isNaN(messageID)) throw new Error("Can't access a message that isn't real.");

  const message = await DB.retrieveRow("messages", messageID);

  res.render("message", {message});
}

module.exports = showMessage;
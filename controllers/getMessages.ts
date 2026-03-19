const DB = require("../models/messages.ts");

const getMessages = async (_: any, res: any) => {
  const messages = await DB.retrieveAll("messages");

  res.render("index", {messages});
}

module.exports = getMessages;
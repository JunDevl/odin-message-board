const DB = require("../models/messages");

// type RequestBody = { user: string, message: string };

const createMessage = async (req/*: any*/, res/*: any*/) => {
  const { user, message } = req.body/* as RequestBody*/;

  const success = await DB.createRow("messages", {
    text: message,
    username: user,
    added: new Date()
  });

  res.redirect("/");
};

module.exports = createMessage;

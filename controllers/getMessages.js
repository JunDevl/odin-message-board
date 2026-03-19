import DB from "../models/messages.js";

const getMessages = async (_/*: any*/, res/*: any*/) => {
  const messages = await DB.retrieveAll("messages");

  res.render("index", { messages });
};

export default getMessages;
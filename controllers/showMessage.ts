import type { RequestHandler } from "express";
import DB from "../models/db.js";

const showMessage: RequestHandler = async (req, res) => {
  const messageID = Number(req.params["messageID"]);

  if (isNaN(messageID)) throw new Error("Can't access a message that isn't real.");

  const message = await DB.retrieveRow("messages", messageID);

  res.render("message", { message });
};

export default showMessage;
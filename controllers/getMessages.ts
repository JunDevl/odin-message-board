import type { RequestHandler } from "express";
import DB from "../models/messages.js";

const getMessages: RequestHandler = async (_, res) => {
  const messages = await DB.retrieveAll("messages");

  res.render("index", { messages });
};

export default getMessages;
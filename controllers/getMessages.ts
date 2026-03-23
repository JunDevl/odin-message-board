import type { RequestHandler } from "express";
import DB from "../models/messages.ts";

const getMessages: RequestHandler = async (_, res) => {
  const messages = await DB.retrieveAll("messages");

  res.render("index", { messages });
};

export default getMessages;
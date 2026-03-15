import type { RequestHandler } from "express";
import { retrieveAll } from "../models/messages.ts";

const getMessages: RequestHandler = async (req, res) => {
  const messages = await retrieveAll();

  res.render("index", {messages});
}

export default getMessages;
import type { RequestHandler } from "express";
import DB from "../models/db.js";

const getMessages: RequestHandler = async (_, res) => {
  const messages = await DB.retrieveAll();

  res.render("index", { messages });
};

export default getMessages;
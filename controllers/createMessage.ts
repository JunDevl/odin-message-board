import type { RequestHandler } from "express";
import DB from "../models/messages.ts";

type RequestBody = { user: string, message: string };

const createMessage: RequestHandler = async (req, res) => {
  const {user, message} = req.body as RequestBody;

  const success = await DB.createRow("messages", {
    text: message,
    username: user,
    added: new Date()
  })

  res.redirect("/");
}

export default createMessage
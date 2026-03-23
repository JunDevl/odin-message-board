import type { RequestHandler } from "express-serve-static-core";
import DB from "../models/messages.js";

type RequestBody = { user: string, message: string };

const createMessage: RequestHandler = async(req: any, res) => {
  const { user, message } = req.body as RequestBody;

  const success = await DB.createRow("messages", {
    text: message,
    username: user,
    added: new Date()
  });

  res.redirect("/");
}

export default createMessage;

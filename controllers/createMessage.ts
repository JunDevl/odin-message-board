import type { RequestHandler } from "express-serve-static-core";
import DB from "../models/db.js";

type RequestBody = { user: string, message: string };

const createMessage: RequestHandler = async(req: any, res) => {
  const { user, message } = req.body as RequestBody;

  const messageRecord = {
    text: message,
    username: user
  }

  const success = await DB.createRow("messages", ["text", "username"], messageRecord);

  if (!success) throw new Error("A database error ocurred.");

  res.redirect("/");
}

export default createMessage;

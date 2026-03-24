import type { RequestHandler } from "express";
import DB from "../models/db.js";

const showMessage: RequestHandler = async (req, res) => {
  const messageID = Number(req.params["messageID"]);

  if (isNaN(messageID)) {
    res.redirect("/");
    return;
  };

  const [message] = await DB.retrieveRow(messageID);

  res.render("message", { message });
};

export default showMessage;
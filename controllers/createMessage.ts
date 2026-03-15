import type { RequestHandler } from "express";
import { create } from "../models/messages.ts";

const createMessage: RequestHandler = async (req, res) => {
  const searchParams = req.query;

  console.log(searchParams);
}

export default createMessage
#! /usr/bin/env node

import { config } from "dotenv";

config();

import postgres from "postgres";

const sql = postgres(`postgresql://${process.env["ROLE_NAME"]}:${process.env["DB_PASSWORD"]}@${process.env["HOST_NAME"]}${process.env["DATABASE_PORT"] ? `:${process.env["DATABASE_PORT"]}` : ""}/${process.env["DATABASE_NAME"]}${process.env["URI_DB_PARAMS"] ? `?${process.env["URI_DB_PARAMS"]}` : ""}`);

const main = async () => {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS usernames (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      text TEXT NOT NULL,
      username VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );`
    .then(async () => {
      await sql`
      INSERT INTO usernames (text, username) 
      VALUES
        ('Hi there!', 'Amando'),
        ('Hello World!', 'Charles');`;
    })
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

main();
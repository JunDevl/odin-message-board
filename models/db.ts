import { config } from "dotenv";

config();

import postgres from "postgres";

const sql = postgres(`postgresql://${process.env["ROLE_NAME"]}:${process.env["DB_PASSWORD"]}@${process.env["HOST_NAME"]}${process.env["DATABASE_PORT"] ? `:${process.env["DATABASE_PORT"]}` : ""}/${process.env["DATABASE_NAME"]}${process.env["URI_DB_PARAMS"] ? `?${process.env["URI_DB_PARAMS"]}` : ""}`);

type Message = {
  readonly id: number,
  text: string,
  username: string,
  readonly created_at: number
}

type ReadonlyProperties = "id" | "created_at";

const generateDatabase = <Table extends Record<string, any>>(table: string) => {
  type WritableColumn = Exclude<keyof Table, ReadonlyProperties> & string;
  type ValidRecord = Omit<Table, ReadonlyProperties> & Record<string, any>;

  async function retrieveRow(id: number) {
    try {
      const row = await sql`SELECT * FROM ${sql(table)} WHERE id = ${id}`;

      return <unknown>row as Message[];
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  async function retrieveAll() {
    try {
      const all = await sql`SELECT * FROM ${sql(table)}`;

      return <unknown>all as Message[];
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  async function createRow(item: ValidRecord) {
    try {
      await sql`
        INSERT INTO ${sql(table)} ${sql(item as Record<string, any>, "text", "username")}`;

      return true;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  return { retrieveRow, retrieveAll, createRow };
};

const DB = generateDatabase<Message>("messages");

export default DB;
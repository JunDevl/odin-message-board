import { config } from "dotenv";

config();

import postgres from "postgres";

const sql = postgres(`postgresql://${process.env["ROLE_NAME"]}:${process.env["DB_PASSWORD"]}@${process.env["HOST_NAME"]}${process.env["DATABASE_PORT"] ? `:${process.env["DATABASE_PORT"]}` : ""}/${process.env["DATABASE_NAME"]}${process.env["URI_DB_PARAMS"] ? `?${process.env["URI_DB_PARAMS"]}` : ""}`);

const generateDatabase = <TableName extends string, Table extends Record<string, any>>() => {
  type WritableColumn = Exclude<keyof Table, "id"> & string;
  type ValidRecord = Omit<Table, "id">;

  async function retrieveRow(table: TableName, id: number) {
    try {
      const row = await sql`SELECT * FROM ${table} WHERE ${table}.id = ${id}`;

      return row;
    } catch (error) {
      console.log(error);
    }
  };

  async function retrieveAll(table: TableName) {
    try {
      const all = await sql`SELECT * FROM ${table}`;

      return all;
    } catch (error) {
      console.log(error);
    }
  }

  async function createRow(table: TableName, columns: WritableColumn[] , ...items: ValidRecord[]) {
    try {
      const columnsSequence = columns.reduce((prev, next) => `${prev}, ${next}` as any);

      const itemsSequence = items
        .map(item => `(${
          columns.reduce((prev, next) => `${item[prev]}, ${item[next]}` as any)
        })`)
        .reduce((prev, next) => `${prev}, ${next}`);

      const inserted = await sql`
        INSERT INTO ${table} 
          (${columnsSequence})
        VALUES
          ${itemsSequence};`;

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return { retrieveRow, retrieveAll, createRow };
};

const DB = generateDatabase();

export default DB;
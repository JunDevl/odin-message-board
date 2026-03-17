type IdentifiableObject = { id: number | ReturnType<Crypto["randomUUID"]> }

type Message = {
  id: number,
  text: string,
  username: string,
  added: Date
}

const messages: Message[] = [
  {
    id: 1,
    text: "Hi there!",
    username: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    username: "Charles",
    added: new Date()
  }
];

type DatabaseTable<TableName extends string, T extends IdentifiableObject> = {tableName: TableName, data: T[]};

const generateDatabase = <TableName extends string, T extends IdentifiableObject>(...tables: DatabaseTable<TableName, T>[]) => {
  const db: {[Name in TableName]: T[]} = {} as typeof db;

  tables.forEach(table => db[table.tableName as TableName] = table.data)

  async function retrieveRow(table: TableName, id: number) {
    if (!db[table]) throw new Error(`Table ${table} doesn't exist on this database.`);

    return db[table].find(record => record.id === id);
  };

  async function retrieveAll(table: TableName) {
    return db[table];
  }

  async function createRow(table: TableName, item: Omit<T, "id">) {
    if (!db[table]) throw new Error(`Table ${table} doesn't exist on this database.`);

    if (!db[table][0]) return;

    let id: T["id"];

    if (typeof db[table][0].id === "number") id = db[table].length + 1;
    else id = crypto.randomUUID();

    return db[table].push({id, ...item} as T);
  }

  return {retrieveRow, retrieveAll, createRow};
}

const DB = generateDatabase({tableName: "messages", data: messages});

export default DB;
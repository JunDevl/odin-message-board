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

export async function retrieve(id: number) {
  return messages.find(message => message.id === id);
};

export async function retrieveAll() {
  return messages;
}

export async function create(message: Message) {
  return messages.push(message);
}
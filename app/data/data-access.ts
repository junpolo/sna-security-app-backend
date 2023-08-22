import { newGuid } from "@utils";
import { User, UserAuthentication } from "app/user/interfaces/user.interface";

import * as fs from "fs";
const USERS_FILE = "./app/data/users.json";

function ensureUserFile() {
  if (fs.existsSync(USERS_FILE)) return;

  fs.appendFileSync(USERS_FILE, ' {"users": []}');
}

export function getUsers(): User[] {
  ensureUserFile();

  const file = fs.readFileSync(USERS_FILE);
  const fileContent = file.toString();

  const { users } = JSON.parse(fileContent);
  return users;
}

export function createUser(user: UserAuthentication): void {
  const users = getUsers();

  const newId = newGuid();
  users.push({ ...user, id: newId });
}

export function getUser(email: string): User {
  const users = getUsers();
  const validUser = users.find((u) => u.email === email);
  return validUser;
}

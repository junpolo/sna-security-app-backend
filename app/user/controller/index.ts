import { Express, Router, Request, Response } from "express";

import { IUser } from "../interfaces/user.interface";

const MOCK_USERS: Array<IUser> = [
  { id: 1, name: "Ahmed Singh" },
  { id: 2, name: "Khadaffy Janjalani" },
  { id: 3, name: "Mohammed Flengs" },
];

export function getUsers(request: Request, response: Response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  return response.json({ users: MOCK_USERS });
}

export function getUserById(request: Request, response: Response) {
  const user = MOCK_USERS.find((u) => u.id === +request.params.id);
  return response.json({ user });
}

export function registerUser(request: Request, response: Response) {
  return response.json({ message: "User created!" });
}

export function login(request: Request, response: Response) {
  return response.json({ message: "User logged in!" });
}

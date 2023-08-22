import { Express, Router, Request, Response } from "express";

import { User, CreateUserPayload } from "../interfaces/user.interface";
import { createUser } from "../../data/data-access";
import { validateSignup } from "../validations/auth.validation";

const MOCK_USERS: Array<User> = [
  { id: 1, email: "ahmed@domain.com", password: "123" },
  {
    id: 2,
    email: "khadaffy@domain.com",
    password: "123",
  },
  {
    id: 3,
    email: "flengs@domain.com",
    password: "123",
  },
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
  const { email, password } = request.body as CreateUserPayload;

  const userData: Omit<User, "id"> = {
    email,
    password,
  };

  const validationStatus = validateSignup(userData);
  if (validationStatus !== true) {
    return response.status(400).send({ ...validationStatus });
  }

  createUser(userData);
  return response.json({ message: "User created!" });
}

export function login(request: Request, response: Response) {
  return response.json({ message: "User logged in!" });
}

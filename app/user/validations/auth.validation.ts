import { CreateUserPayload } from "../interfaces/user.interface";

export function validateSignup(user: CreateUserPayload) {
  if (user.email !== "" && user.password !== "") return true;

  let message = "";

  if (user.email === "") {
    message += "Email";
  }

  if (user.password === "") {
    message += message === "" ? "Password" : " and Password";
  }

  message += " is required";

  return { status: "Signup Error", message };
}

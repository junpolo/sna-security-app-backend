import { User } from "app/user/interfaces/user.interface";
import { sign } from "jsonwebtoken";

interface JWTPayload extends Omit<User, "password"> {}

export function createToken(user: User): string {
  const payload: JWTPayload = { id: user.id, email: user.email };
  const secret = process.env["SECRET"];

  return sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "5m",
  });
}

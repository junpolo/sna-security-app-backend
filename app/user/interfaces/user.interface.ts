export interface User {
  id: string | number;
  email: string;
  password: string;
}

export interface UserAuthentication extends Omit<User, "id"> {}

export interface CreateUserPayload extends Omit<User, "id"> {}

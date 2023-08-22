export interface User {
  id: string | number;
  email: string;
  password: string;
}

export interface UserAuthentication {
  email: string;
  password: string;
}

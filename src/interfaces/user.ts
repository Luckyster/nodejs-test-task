export interface userSignupInput {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  photo: string;
}

export interface userLoginInput {
  email: string;
  password: string;
}

export interface userProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: Buffer;
}

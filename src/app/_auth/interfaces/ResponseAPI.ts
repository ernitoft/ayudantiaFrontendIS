export interface ResponseAPILogin {
  message: string;
  data:    Data;
  error:   boolean;
}

export interface Data {
  token: string;
  user:  User;
}

export interface User {
  id:         number;
  name:       string;
  email:      string;
  role_id:    number;
  created_at: Date;
  updated_at: Date;
}

export interface ResponseAPIRegister {
  message: string;
  data:    User[];
  error:   boolean;
}

import { enumAdminRole } from '@/config/enum';

export interface IAuth {
  token: string;
  email?: string;
  userRole?: enumAdminRole;
  image?: string;
  userId?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface Password {
  current_password: string;
  new_password: string;
  confirm_password: string;
}
export interface Phone {
  phone_number: string;
}
export interface Otp {
  otp: string;
}
export type IPassword = Partial<Password>;
export type IPhone = Partial<Phone>;
export type IOtp = Partial<Otp>;

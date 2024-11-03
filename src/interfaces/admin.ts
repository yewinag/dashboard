import { enumAdminRole } from '@/config/enum';

export interface IAdmin {
  image: string;
  userId: string;
  name: string;
  email: string;
  userRole: enumAdminRole;
  status: boolean;
}

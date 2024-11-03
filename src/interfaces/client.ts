import { Dayjs } from 'dayjs';
import { Typestate } from './search';
import { enumReferred, enumServiceCategory } from '@/config/enum';

export interface Client {
  _id: string;
  name: string;
  state: Typestate | string;
  township: string;
  age: number | string;
  pregnancyStatus: boolean;
  phoneNumber?: string;
  pragrancyStatus?: boolean;
  noOfChildren?: number;
  geastralMonth?: number;
  userId?: string;
  status: boolean;
  dateOfBirth?: Dayjs | string;
  updatedAt: string;
  createdAt: string;
  regionId: string;
  stateId: string;
  category: enumServiceCategory;
  referredBy: enumReferred[];
  deliverySite: string;
  ANCareVisitStatus: boolean;
  serviceCategory: string;
  gestational_age_of_1_st_AN_care_visit: string;
  total_numbers_of_AN_care_visit: number;
}
export type IClient = Partial<Client>;

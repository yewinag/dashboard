import { enumFilter } from '@/config/enum';

export interface IFilterOption {
  label: string;
  children: string[];
}
export type Typestate = 'ayeyarwady' | 'bago' | 'yangon' | string;
export interface IPagination {
  page?: number;
  limit?: number;
}
export interface ISearchParams {
  search?: string;
  searchColumn?: enumFilter | string;
  startDate?: string;
  endDate?: string;
}
export interface AdvanceSearch {
  state: Typestate;
  region: string;
}
export interface PhoneClient {
  callerId: string | number;
  didNumber: string | number;
  callerInput: string | number;
}
export interface IAdminSearch extends IPagination, ISearchParams {}
export interface IClinicSearch extends IPagination, ISearchParams {}
export interface ICouponSearch extends IPagination, ISearchParams {}
export interface IClientSearch extends IPagination, ISearchParams {}
export interface IContraceptionSearch extends IPagination, ISearchParams {}
export type IAdvanceSearch = Partial<AdvanceSearch>;
export interface ICouponFamilySearch
  extends IPagination,
    ISearchParams,
    IAdvanceSearch {}
export interface IHealthSearch extends IPagination, ISearchParams {}

import { IPagination } from '@/interfaces/search';

export const pageNumber = 1 as number;
export const pageLimit = 10 as number;

export const initPage: IPagination = {
  page: pageNumber,
  limit: pageLimit,
};

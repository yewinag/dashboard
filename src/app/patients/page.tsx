'use client';
import { ClientTable } from '../../components/patients/Table';
import { initPage } from '../../config/constants';
import { enumFilter } from '@/config/enum';
import useAxiosClient from '../../hooks/useAxiosClient';
import { IClient } from '@/interfaces/client';
import { IPagination } from '@/interfaces/search';
import { useEffect, useState } from 'react';

const User = () => {
  const [page, setPage] = useState<IPagination>(initPage);
  const [total, setTotal] = useState<number>(0);
  const [data, setData] = useState<IClient[]>([]);
  const [filters, setFilters] = useState<enumFilter | string>('');
  const [text, setText] = useState<string>('');
  const [date, setDate] = useState<string[]>([]);
  const axiosClient = useAxiosClient();

  useEffect(() => {
    fetchClient();
  }, [page, text, date]);

  const fetchClient = async () => {
    try {
      const res = await axiosClient.get('/client/get', {
        params: {
          page: page.page,
          limit: page.limit,
          searchColumn: filters,
          search: text,
          startDate: date[0],
          endDate: date[1],
        },
      });
      console.log(res);
      setData(res.data?.data);
      setTotal(res.data?.nTotal);
      // success(t("message.fetch.success"));
    } catch (err: any) {
      // error(t("message.fetch.fail"));
    } finally {
      // dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <ClientTable data={data} callback={fetchClient} />
    </div>
  );
};
export default User;

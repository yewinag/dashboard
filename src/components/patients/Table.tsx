import { Table, Tooltip } from 'antd';

import type { ColumnsType } from 'antd/es/table';

import { memo } from 'react';

import dayjs from 'dayjs';
import { IClient } from '../../interfaces/client';
import { enumReferred } from '../../config/enum';
import Link from 'next/link';

interface IProps {
  data: IClient[];
  callback: () => void;
}

export const ClientTable = memo(({ data, callback }: IProps) => {
  const options = [
    {
      value: enumReferred.MYAN_CARE,
      label: enumReferred.MYAN_CARE,
    },
    {
      value: enumReferred.VOLUNTEER,
      label: enumReferred.VOLUNTEER,
    },
  ];

  const dataSource: IClient[] = data;

  const columns: ColumnsType<IClient> = [
    {
      title: 'client_name',
      dataIndex: 'name',
      key: '1',
      render: (_, record) => (
        <span>
          <Link href={`/patients/${record.userId}`}>{record.name}</Link>
        </span>
      ),
      sorter: (a, b) => {
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        } else {
          return 1;
        }
      },
    },
    {
      title: 'phone_number',
      dataIndex: 'phoneNumber',
      key: '2',
    },
    {
      title: 'date_of_birth',
      dataIndex: 'dateOfBirth',
      key: '3',
      render: (date) => (date ? dayjs(date).format('DD-MM-YYYY') : 'empty'),
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: '4',
      render: (age) => Math.ceil(age),
    },
    {
      title: 'number_of_children',
      dataIndex: 'noOfChildren',
      key: '5',
    },
    {
      title: 'anc_visit_status',
      dataIndex: 'ANCareVisitStatus',
      key: '10',
      render: (status) => status.toString(),
    },
    {
      title: <Tooltip title={'coupon_genearated_count'}> {'cg_count'}</Tooltip>,
      dataIndex: 'generateCount',
      key: '6',
    },
    {
      title: <Tooltip title={'coupon_redeemed_count'}> {'cr_count'}</Tooltip>,
      dataIndex: 'redemeedCount',
      key: '7',
    },
    {
      title: 'referredBy',
      dataIndex: 'referredBy',
      key: '8',
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      rowKey={'couponFamilyId'}
      columns={columns}
      pagination={false}
    />
  );
});

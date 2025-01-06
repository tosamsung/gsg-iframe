import React from 'react';
import { Table,  Pagination, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FarmingHistory } from '../../../../entity/FarmingHistory';
import { MetaData } from '../../../../entity/Other';
import { formatDate } from '../../../../util/Utils';
import { FarmActionEnum, getFarmActionEnumColor, getFarmActionEnumDescription } from '../../../../entity/enum/FarmAction';
import { getStatusEnumColor, getStatusEnumDescription, StatusEnum } from '../../../../entity/enum/Status';

interface HistoryTableProps {
  data: FarmingHistory[];
  meta: MetaData;
  buttons: (record: FarmingHistory) => React.ReactNode;
  onPaginationChange: (page: number, pageSize: number) => void;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ data, meta, buttons, onPaginationChange }) => {
  const columns: ColumnsType<FarmingHistory> = [
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (action: FarmActionEnum) => (
        <Tag color={getFarmActionEnumColor(action)}>{getFarmActionEnumDescription(action)}</Tag>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: StatusEnum) => (
        <Tag color={getStatusEnumColor(status)}>{getStatusEnumDescription(status)}</Tag>
      ),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => formatDate(date),
    }
    ,
    {
      title: '',
      key: 'id',
      render: (_, record) =>
        record.status !== StatusEnum.Completed && record.status !== StatusEnum.Canceled ? buttons(record) : null, // Hiển thị nút chỉ khi action khác "completed"
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey={(record: FarmingHistory) => record.id} // Sử dụng id làm rowKey
      />
      <Pagination
        current={meta.page}
        pageSize={meta.pageSize}
        total={meta.count}
        onChange={(page, pageSize) => onPaginationChange(page, pageSize)}
        onShowSizeChange={(current, size) => onPaginationChange(current, size)}
        style={{ marginTop: '16px', textAlign: 'right' }}
      />
    </>
  );
};

export default HistoryTable;

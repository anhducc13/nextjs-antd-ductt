import React from 'react';
import Head from 'next/head';
import { Button, Card, Input, Radio, Table } from 'antd';
import { withLayoutAdmin } from 'components/HOC/withLayoutAdmin';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const TestExamList = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Card className="m-3" style={{ height: '100%' }}>
        <div className="d-sm-flex justify-content-sm-between">
          <h3>Danh sách đề thi</h3>
          <Button className="text-uppercase" type="primary">Đăng đề thi mới</Button>
        </div>
        <Input.Search
          placeholder="Nhập tìm kiếm..."
          size="large"
          onSearch={value => console.log(value)}
        />
        <div className="mt-3">
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">Đã xuất bản</Radio.Button>
            <Radio.Button value="b">Tất cả</Radio.Button>
            <Radio.Button value="c">Riêng tư</Radio.Button>
            <Radio.Button value="d">Thùng rác</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <strong className="d-block mt-2 mb-1 text-danger">Kéo xuống dưới để xóa tạm 10 mục</strong>
          <Table
            bordered
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            scroll={{
              x: '100%',
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default withLayoutAdmin(TestExamList);


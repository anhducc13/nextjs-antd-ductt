import React from 'react';
import Head from 'next/head';
import { Card } from 'antd';
import { withLayoutAdmin } from 'components/HOC/withLayoutAdmin';

const Admin = () => {

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Card className="m-3" style={{ height: '100vh' }}>
        abc
      </Card>
    </>
  );
};

export default withLayoutAdmin(Admin);


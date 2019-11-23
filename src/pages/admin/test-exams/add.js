import React from 'react';
import Head from 'next/head';
import { Card } from 'antd';
import { withLayoutAdmin } from 'components/HOC/withLayoutAdmin';

const TestExamAdd = () => {

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel='icon' href='/favicon.ico'/>
        <meta name="viewport" content="width=1190, initial-scale=1"/>
      </Head>
      <Card className="m-3" style={{ height: '100%' }}>
        afsdgdfghgh
      </Card>
    </>
  );
};

export default withLayoutAdmin(TestExamAdd);


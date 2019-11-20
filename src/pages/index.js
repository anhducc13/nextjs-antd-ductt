import React from 'react';
import Head from 'next/head';
import { withRightContent } from 'components/HOC/withRightContent';
import { withHeaderFooter } from 'components/HOC/withHeaderFooter';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div style={{ marginTop: 5 }}>
        abc
      </div>
    </div>
  );
};

export default withHeaderFooter(withRightContent(Home));


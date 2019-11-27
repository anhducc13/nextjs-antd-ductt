import React from 'react';
import App from 'next/app';
import 'antd/dist/antd.min.css';
import 'assets/scss/index.scss';
import NextNProgress from 'components/NextNProgress';
import 'configs';


class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NextNProgress/>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

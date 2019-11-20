import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FeedBar from 'components/FeedBar';

export const withHeaderFooter = Comp => ({ ...props }) => {
  return (
    <>
      <Header/>
      <FeedBar/>
      <Comp {...props} />
      <Footer/>
    </>
  );
};

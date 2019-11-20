import React from 'react';
import Left from 'components/Header/Left';
import Right from 'components/Header/Right';


export default () => {
  return (
    <header className="main-navbar main-navbar__group py-1">
      <div className="main-navbar__container container px-md-0">
        <Left/>
        <Right/>
      </div>
    </header>
  );
};

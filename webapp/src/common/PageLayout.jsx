import React from 'react';
import Header from './navigation/Header';

import Community from '../pages/community';
import About from '../pages/about';
import Location from '../pages/location';
import Menu from '../pages/menu';

const PageLayout = (props) => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Community />
        <Location />
        <Menu />
      </main>
    </div>
  );
};

export default PageLayout;

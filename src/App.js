import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';
import GamePage from './components/views/GamePage/GamePageContainer';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switchWrapper'
      >
        <Route exact path='/' component={Homepage} />
        <Route exact path='/game/:id' component={GamePage} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>

);

export default App;

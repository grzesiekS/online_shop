import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';
import GamePage from './components/views/GamePage/GamePageContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/game/:id' component={GamePage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>

);

export default App;

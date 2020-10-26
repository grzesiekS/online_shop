import React from 'react';

import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';

const App = () => (
  <MainLayout>
    <Homepage />
  </MainLayout>
);

export default App;

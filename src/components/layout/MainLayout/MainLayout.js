import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PromptWindow from '../../features/PromptWindow/PromptWindow';

const MainLayout = ({children}) => (
  <div>
    <PromptWindow>
      <Header />
      {children}
      <Footer />
    </PromptWindow>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

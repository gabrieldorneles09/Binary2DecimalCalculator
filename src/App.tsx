import React from 'react';

import Bin2Dec from './pages/Bin2Dec';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Bin2Dec />
    </>
  );
};

export default App;

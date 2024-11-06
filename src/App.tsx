import React from 'react';
import { Outlet } from 'react-router-dom';

import { Bodycontent } from './modules/pages/layout/container/body/BodyContent';
import { Main } from './modules/pages/layout/container/body/Main';

import { Header } from 'src/modules/pages/layout/container/header/Header';
import { HeaderContent } from 'src/modules/pages/layout/container/header/HeaderContent';
import { Menu } from 'src/modules/pages/layout/container/sidebar/Menu';

const App: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <Main>
        <Menu />

        <Bodycontent>
          <Outlet />
        </Bodycontent>
      </Main>
    </>
  );
};

export default App;

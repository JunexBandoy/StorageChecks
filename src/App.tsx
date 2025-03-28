import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Login from './config/login';
import { Bodycontent } from './modules/pages/layout/container/body/BodyContent';
import { Main } from './modules/pages/layout/container/body/Main';

import { Header } from 'src/modules/pages/layout/container/header/Header';
import { HeaderContent } from 'src/modules/pages/layout/container/header/HeaderContent';
import { Menu } from 'src/modules/pages/layout/container/sidebar/Menu';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate(); // React Router DOM's navigate function

  useEffect(() => {
    // Check if JWT token exists in localStorage
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []); // Empty dependency array to run only once when component mounts

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Update state when login is successful
    navigate('/'); // Navigate to the homepage or dashboard
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />; // Show login component if not authenticated
  }

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

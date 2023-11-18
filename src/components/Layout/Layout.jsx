import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduce/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

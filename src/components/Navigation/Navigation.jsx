import { useSelector } from 'react-redux';
import { Link, Nav } from './Navigation.styled';
import { selectIsLoggedIn } from 'reduce/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};

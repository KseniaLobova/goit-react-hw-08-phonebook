import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

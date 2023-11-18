import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'reduce/auth/operation';
import { Btn, Container, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  return (
    <Container>
      <Text>Welcome, {name}</Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Container>
  );
};

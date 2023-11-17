import { useDispatch } from 'react-redux';
import { logOut } from 'reduce/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>welcome</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivatRout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'reduce/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'reduce/auth/operation';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

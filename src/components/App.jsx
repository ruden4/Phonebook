import { Routes, Route } from "react-router-dom";
import css from './App.module.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/Auth";
import { PrivateRoute } from "redux/PrivateRoute";
import { PublicRoute } from "redux/PublicRoute";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />

          <Route path="contacts"
          element={<PrivateRoute redirectTo="/login"
              component={<Contacts />} />} />
          
          <Route path="login"
          element={<PublicRoute redirectTo="/"
              component={<LogIn />} />} />
  
          <Route path="register"
          element={<PublicRoute redirectTo="/"
              component={<Register/>} />} />
        </Route>
      </Routes>
      </div>
  );
};

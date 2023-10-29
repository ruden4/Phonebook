import { Routes, Route } from "react-router-dom";
import css from './App.module.css';

import Layout from './Layout';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';

export const App = () => {

  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
      </div>
  );
};

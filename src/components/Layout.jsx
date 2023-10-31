import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Oval } from "react-loader-spinner";


import css from './App.module.css'
import { Header } from "./Header/Header";

const Layout = () => {
    return (
    <div className={css.navigation}>
        <Header />
        <Suspense fallback={<Oval
  height={20}
  width={20}
  color="rgb(51, 51, 51)"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="rgb(51, 51, 51)"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>}>
        <Outlet />  
        </Suspense>
    </div>
    )
}

export default Layout;


import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";

import css from './App.module.css'
import { Header } from "./Header/Header";

const Layout = () => {
    return (
    <div className={css.navigation}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />  
        </Suspense>
    </div>
    )
}

export default Layout;
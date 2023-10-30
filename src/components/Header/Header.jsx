import css from "./Header.module.css";

import { HeaderNav } from "./HeaderNav";
import { HeaderUser } from "./HeaderUser";
import Logo from "./Logo";

export function Header() {
    return (
        <div className={`${css.header} animate__animated animate__fadeInDown`}>
            <Logo/>
            <HeaderNav/>
            <HeaderUser/>
        </div>
        
    )
}
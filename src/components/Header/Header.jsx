import css from "./Header.module.css";

import { HeaderNav } from "./HeaderNav";
import { HeaderUser } from "./HeaderUser";
import Logo from "./Logo";

export function Header() {
    return (
        <div className={css.header}>
            <Logo/>
            <HeaderNav/>
            <HeaderUser/>
        </div>
        
    )
}

// export default Header;
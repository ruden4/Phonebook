import css from "./Header.module.css";

import { HeaderNav } from "./HeaderNav";
import { HeaderUser } from "./HeaderUser";

export function Header() {
    return (
        <div className={css.header}>
            <h1 className={css.bookTitle}>Phonebook</h1>
            <HeaderNav/>
            <HeaderUser/>
        </div>
        
    )
}

// export default Header;
import css from './Header.module.css';

export function HeaderNav() {
    return (
        <nav className={css.navigation}>
            <ul className={css.navigationList}>
                <li className={css.navigationItem}><a className={css.navigationLink} href="/">Home</a></li>
                <li className={css.navigationItem}><a className={css.navigationLink} href="/">Contacts</a></li>
            </ul>
        </nav>
    )
}
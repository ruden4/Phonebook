import css from './Header.module.css';

export function HeaderUser() {
    return (
    <div className={css.userWrap}>
            <p className={css.userEmail}>mango@mail.com</p>
            <button className={css.logOutBtn} type="button">Log In</button>
            <button className={css.logOutBtn} type="button">Logout</button>
    </div>)
}
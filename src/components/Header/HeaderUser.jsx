import css from './Header.module.css';
import { Link } from 'react-router-dom';

export function HeaderUser() {
    return (
    <div className={css.userWrap}>
            <p className={css.userEmail}>mango@mail.com</p>
            <button className={css.logOutBtn} type="button"><Link to='/login'>Log In</Link></button>
            <button className={css.logOutBtn} type="button"><Link to='/'>Log Out</Link></button>
    </div>)
}
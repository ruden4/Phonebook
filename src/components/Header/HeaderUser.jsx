import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getIsLoggedIn } from 'redux/selectors';
import { logOut } from 'redux/Auth';

export function HeaderUser() {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const { name } = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
    <div className={`${css.userWrap} animate__animated animate__flipInX`}>
            <p className={css.userEmail}>{name}</p>
            {isLoggedIn ? <button className={css.logOutBtn}
                                    onClick={handleLogOut}
                                    type="button"><Link to='/'>Log Out</Link></button> : 
                <button className={css.logOutBtn}
                    type="button" ><Link to='/login'>Log In</Link></button>}
    </div>)
}
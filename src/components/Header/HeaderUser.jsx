import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getIsLoggedIn } from 'redux/selectors';
import { logOut } from 'redux/Auth';

export function HeaderUser() {

    const dispatch = useDispatch();

    const {name}  = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const logoutHandler = () => {
        dispatch(logOut())
    }
    
    return (
        <div className={`${css.userWrap} animate__animated animate__flipInX`}>
            {isLoggedIn ? <><p className={css.userEmail}>{name}</p>
                <button className={css.logOutBtn}
                    onClick={logoutHandler}
                    type="button"><Link to='/'>Log Out</Link></button></>
                :
                <button className={css.logOutBtn}
                    type="button" ><Link to='/login'>Log In</Link></button>
                }
            

    </div>)
}
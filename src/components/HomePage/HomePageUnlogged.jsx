import css from './HomePage.module.css'
import { Link } from 'react-router-dom'

import 'animate.css';

export function HomePageUnlogged() {
    return (
        <div className={css.homepageWrap}>
            <h1 className={`${css.homepageHeroTitle} animate__animated animate__fadeInDown`}>HEY THERE! LOG IN OR CREATE NEW ACCOUNT FOR YOUR OWN PHONEBOOK!</h1>
            <ul className={css.homepageAuth}>
                <li className={`${css.authItem} animate__animated animate__fadeInDown`}>
                    <Link to='login'>
                    <button className={css.authBtn} type="button">LOG IN</button>
                    </Link>
                </li>
                <li className={`${css.authItem} animate__animated animate__fadeInUp`}>
                    <Link to='register'>
                    <button className={css.authBtn} type="button">CREATE ACCOUNT</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
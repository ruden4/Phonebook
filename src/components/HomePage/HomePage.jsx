import css from './HomePage.module.css'
import { Link } from 'react-router-dom'

export function HomePage() {
    return (
        <div className={css.homepageWrap}>
            <h1 className={css.homepageHeroTitle}>Hey there! LOG IN or REGISTER new account for your own PHONEBOOK!</h1>
            <ul className={css.homepageAuth}>
                <li className={css.authItem}>
                    <Link to='login'>
                    <button className={css.authBtn} type="button">LOG IN</button>
                    </Link>
                </li>
                <li className={css.authItem}>
                    <Link to='register'>
                    <button className={css.authBtn} type="button">REGISTER</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
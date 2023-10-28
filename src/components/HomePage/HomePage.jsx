import css from './HomePage.module.css'

export function HomePage() {
    return (
        <div className={css.homepageWrap}>
            <h1 className={css.homepageHeroTitle}>Hey there! LOG IN or REGISTER new account for your own PHONEBOOK!</h1>
            <ul className={css.homepageAuth}>
                <li className={css.authItem}>
                    <button className={css.authBtn} type="button">LOG IN</button>
                </li>
                <li className={css.authItem}>
                    <button className={css.authBtn} type="button">REGISTER</button>
                </li>
            </ul>
        </div>
    )
}
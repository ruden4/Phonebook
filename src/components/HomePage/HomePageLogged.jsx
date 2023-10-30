import css from './HomePage.module.css';
import 'animate.css';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

export function HomePageLogged() {

const {name} = useSelector(getUser)

    return (
        <div className={css.homepageWrap}>
            <h1 className={`${css.homepageHeroTitle} animate__animated animate__fadeInDown`}>{`What's up, ${name}? Ready to create some new contacts?`}</h1>
            <h2 className={`${css.homepageHeroTitle} animate__animated animate__fadeInUp`}>Fine! Let's do this!</h2>
        </div>
    )
}
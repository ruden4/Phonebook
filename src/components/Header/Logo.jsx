import css from './Header.module.css'

const Logo = () => {
    return (
        <h1 className={css.bookTitle}>Phonebook
            <a href="https://github.com/ruden4"
                rel='noreferrer'
                target='_blank'
                className={css.copyRight}>© 2023, created by ruden4</a>
        </h1>
    )
};

export default Logo;

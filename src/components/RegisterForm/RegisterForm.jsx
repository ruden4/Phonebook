import css from './RegisterForm.module.css'

export function RegisterForm() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleInput = e => {
        console.log(e.target.value)
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}> 
                <label className={css.label}>
                    Login
                    <input
                        onChange={handleInput}
                        // value={name}
                        className={css.input}
                        type="text"
                        name="login"
                        required
                    />
                 </label> 
                 <label className={css.label}>E-mail
                    <input
                        onChange={handleInput}
                        // value={number}
                        className={css.input}
                        type="email"
                        name="email"
                        required
                    />
            </label>
             <label className={css.label}>
                    Password
                    <input
                        onChange={handleInput}
                        // value={name}
                        className={css.input}
                        type="password"
                        name="password"
                        required
                    />
                 </label> 
                <button className={css.addBtn}>Register</button>
            </form>
    )
}
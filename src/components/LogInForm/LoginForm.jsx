import css from "./LoginForm.module.css"

export function LoginForm() {

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleInput = e => {
        console.log(e.target.value)
    };

    return (
        <div className={css.formWrap}>
        <h2 className={css.formTitle}>Log In</h2>
        <form className={css.form} onSubmit={handleSubmit}> 
                <label className={css.label}>
                    E-mail
                    <input
                        onChange={handleInput}
                        // value={name}
                        className={css.input}
                        type="email"
                        name="email"
                        required
                    />
                 </label> 
                 <label className={css.label}>Password
                    <input
                        onChange={handleInput}
                        // value={number}
                        className={css.input}
                        type="password"
                        name="password"
                        required
                    />
                </label>
                <button className={css.submit}>Log In</button>
            </form>
            </div>
    )
}
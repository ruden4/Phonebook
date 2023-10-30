import css from "./LoginForm.module.css";

import { useState } from 'react';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const userData = { email, password };
        console.log(userData)
        e.target.reset();
    }

    return (
        <div className={css.formWrap}>
        <h2 className={css.formTitle}>Log In</h2>
        <form className={css.form} onSubmit={handleSubmit}> 
                <label className={css.label}>
                    E-mail
                    <input
                        onChange={handleInput}
                        className={css.input}
                        type="email"
                        name="email"
                        required
                    />
                 </label> 
                 <label className={css.label}>Password
                    <input
                        onChange={handleInput}
                        className={css.input}
                        type="password"
                        name="password"
                        required
                    />
                </label>
                <button className={css.submit}>LOG IN</button>
            </form>
            </div>
    )
}
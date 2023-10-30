import css from '../LogInForm/LoginForm.module.css'

import { useState } from 'react';

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleInput = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break;
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
        const userData = { name, email, password };
        console.log(userData)
        e.target.reset();
    }

    return (
        <div className={css.formWrap}>
        <h2 className={css.formTitle}>Create new account</h2>
        <form className={css.form} onSubmit={handleSubmit}> 
                 <label className={css.label}>
                    Name
                    <input
                        onChange={handleInput}
                        className={css.input}
                        type="text"
                        name="login"
                        required
                    />
                 </label> 
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
                <button className={css.submit}>REGISTER</button>
            </form>
            </div>
    )
}
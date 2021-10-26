import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";

import styles from './styles.module.scss';

export function Login() {
    const { Login } = useAuth();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { user, password } = inputs;

        if (!user || !password) {
            alert("Há campos vazios de login");
            return;
        }

        Login(inputs);
        setInputs({});
    }

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="user" 
                        value={inputs.user || ""} 
                        placeholder="Nome de usuário"
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Senha"
                        value={inputs.password || ""} 
                        onChange={handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
                <a href="#">Cadastrar novo usuário</a>
            </div>
        </div>
    );
}
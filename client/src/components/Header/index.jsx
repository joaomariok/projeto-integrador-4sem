import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import styles from './styles.module.scss'

export function Header() {
    const { Logout } = useAuth();

    async function handleLogout() {
        Logout();
    }

    return (
        <header className={styles.defaultHeader}>
            <h1>
                <Link to="/" className={styles.headerLogo}>Home</Link>
            </h1>
            <div className={styles.itemWrapper}>
                <h2>
                    <Link to="/cadastro" className={styles.headerItem}>Cadastro</Link>
                </h2>
                <h2>
                    <Link to="/grafico/horasdeespera" className={styles.headerItem}>Horas de espera</Link>
                </h2>
                <h2>
                    <Link to="/grafico/permaneciaporgravidade" className={styles.headerItem}>Permanecia por Gravidade</Link>
                </h2>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
}
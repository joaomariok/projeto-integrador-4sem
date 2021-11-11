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
                <Link to="/cadastro" className={styles.headerItem}>
                    Cadastro de novo paciente
                </Link>
                {/* <h2 className={styles.verticalSeparator}>|</h2> */}
                <div className={styles.verticalSeparator} ></div>
                <Link to="/grafico/horasdeespera" className={styles.headerItem}>
                    Ocorrências por Faixa de permanência
                </Link>
                {/* <h2 className={styles.verticalSeparator}>|</h2> */}
                <div className={styles.verticalSeparator} ></div>
                <Link to="/grafico/permaneciaporgravidade" className={styles.headerItem}>
                    Permanência por Gravidade
                </Link>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
}
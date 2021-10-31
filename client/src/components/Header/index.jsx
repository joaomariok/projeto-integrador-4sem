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
                <Link to="/" className={styles.headerLogo}>Logo</Link>
            </h1>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
}
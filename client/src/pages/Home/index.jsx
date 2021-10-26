import React from "react";
import { useAuth } from "../../contexts/auth";

import styles from './styles.module.scss'

export function Home() {
    const { Logout } = useAuth();

    async function handleLogout() {
        Logout();
    }

    return (
        <div className={styles.homeWrapper}>
            <header className={styles.homeHeader}>
                <h1>
                    <a href="">Logo</a>
                </h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <div className={styles.dashboardWrapper}>
                <h1>Home</h1>
            </div>
        </div>
    );
}
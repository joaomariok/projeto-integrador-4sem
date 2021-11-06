import React from "react";
import { Link } from "react-router-dom";

import styles from './styles.module.scss'

export function Home() {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.dashboardWrapper}>
                <h1>Home</h1>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/dummy2">Dummy2</Link>
            </div>
        </div>
    );
}
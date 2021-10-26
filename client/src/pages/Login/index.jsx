import React from "react";
import { useAuth } from "../../contexts/auth";

export function Login() {
    const { Login } = useAuth();

    function handleLogin() {
        Login();
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
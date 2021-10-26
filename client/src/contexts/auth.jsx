import React, { createContext, useContext, useEffect, useState } from "react";
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('@Dashboard:user');
        const storageToken = localStorage.getItem('@Dashboard:token');

        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
            api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        }
    }, []);

    async function Login() {
        const response = await api.post('/login', {
            // Get from <form />
            user: 'userexample',
            password: '123456',
        });
        
        // Check for unauthorized

        setUser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        localStorage.setItem('@Dashboard:user', JSON.stringify(response.data.user));
        localStorage.setItem('@Dashboard:token', response.data.token);
    }

    function Logout() {
        setUser(null);

        sessionStorage.removeItem('@Dashboard:user');
        sessionStorage.removeItem('@Dashboard:token');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export default AuthContext;
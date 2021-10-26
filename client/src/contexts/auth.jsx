import React, { createContext, useContext, useEffect, useState } from "react";
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storageUser = localStorage.getItem('@Dashboard:user');
        const storageToken = localStorage.getItem('@Dashboard:token');

        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
            api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        }
    }, []);

    async function Login(inputs) {
        const { user, password } = inputs;
        if (!user || !password) return;

        const response = await api.post('/login', {
            user: inputs.user,
            password: inputs.password,
        });
        
        // Check for unauthorized
        if (response.status == 401 || response.status == 404) {
            Logout();
        }

        setUser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        localStorage.setItem('@Dashboard:user', JSON.stringify(response.data.user));
        localStorage.setItem('@Dashboard:token', response.data.token);
    }

    function Logout() {
        localStorage.removeItem('@Dashboard:user');
        localStorage.removeItem('@Dashboard:token');
        
        setUser(null);
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
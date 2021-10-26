import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Login } from '../pages/Login';

export function SignInRoutes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Login} />
        </BrowserRouter>
    );
};
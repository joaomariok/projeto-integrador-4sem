import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dummy1 } from '../components/Dummy1';
import { Dummy2 } from '../components/Dummy2';
import { Header } from '../components/Header';

import { Home } from '../pages/Home';

export function OtherRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/dummy1" component={Dummy1} />
                <Route path="/dummy2" component={Dummy2} />
            </BrowserRouter>
        </div>
    );
};
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Cadastro } from '../components/Cadastro';
import { Dummy2 } from '../components/Dummy2';
import { GraficoHorasDeEspera } from '../components/GraficoHorasDeEspera';
import { Header } from '../components/Header';

import { Home } from '../pages/Home';

export function OtherRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/grafico/horasdeespera" component={GraficoHorasDeEspera} />
                <Route exact path="/dummy2" component={Dummy2} />
            </BrowserRouter>
        </div>
    );
};
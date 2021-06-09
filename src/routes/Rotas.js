import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Items from '../pages/Items'
import Locacaos from '../pages/Locacaos'

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/locacaos" component={Locacaos} />
            </Switch>
        </HashRouter>
    )
}
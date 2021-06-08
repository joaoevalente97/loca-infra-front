import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Estoque from '../pages/Estoque'
import Items from '../pages/Items'
import Locacao from '../pages/Locacao'

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Estoque} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/Locacao" component={Locacao} />
            </Switch>
        </HashRouter>
    )
}
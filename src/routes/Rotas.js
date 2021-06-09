import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'


import Items from '../pages/Items'
import Locacaos from '../pages/Locacaos'
import CadastraItems from '../pages/CadastraItems'
import CadastraLocacaos from '../pages/CadastraLocacaos'

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Items} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/locacaos" component={Locacaos} />
                <Route exact path="/cadastra-items" component={CadastraItems} />
                <Route exact path="/cadastra-locacaos" component={CadastraLocacaos} />

            </Switch>
        </HashRouter>
    )
}
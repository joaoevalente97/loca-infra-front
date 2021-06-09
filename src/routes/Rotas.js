import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Items from '../pages/Items'

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Items} />
                <Route exact path="/items" component={Items} />
            </Switch>
        </HashRouter>
    )
}
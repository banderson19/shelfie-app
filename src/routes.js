import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import BinList from './components/BinList/BinList'


export default (
    <Switch>
        <Route component = {Home} exact path="/"/>
        <Route component = {BinList} path="/shelfs/:shelf_id"/>
    </Switch>
)
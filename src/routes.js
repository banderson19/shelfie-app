import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import BinList from './components/BinList/BinList'
import Item from './components/Item/Item';


export default (
    <Switch>
        <Route component = {Home} exact path="/"/>
        <Route component = {BinList} path="/shelfs/:shelf_id"/>
        <Route component = {Item} path="/api/shelfs/:shelf_id/:bin_id"/>
    </Switch>
)
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

export const Routes = () => {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/dishes/:id' component={DetailPage}/>
      </Switch>
    );
}
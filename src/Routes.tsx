import React from 'react';
import Home from './pages/Home/';
import { Switch, Route } from "react-router-dom";

function Routes() {

  return (
    <Switch>
        { PAGES.map(page => 
            <Route 
                key={page.name} 
                path={page.path} 
                component={page.component}
                exact={!Boolean(page.path.includes(":"))} 
                />) }

        <Route component={() => <h4>Error - Page not found</h4>} />
    </Switch>
  );
}

/**
 * Strony dostepne użytkownikowi.
 */
const PAGES = Object.freeze([
    {
        name: "home",
        label: "Home",
        path: "/",
        component: Home
    },
])

export default Routes;

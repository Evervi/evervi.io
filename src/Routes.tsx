import React from 'react';
import Home from './pages/Home/';
import { Switch, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Project from './pages/Project';
import ContactPage from './pages/Contact/'

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
    {
        name: "projects",
        label: "Projects",
        path: "/projects",
        component: Projects
    },
    {
        name: "project",
        label: "Project",
        path: "/project/:short",
        component: Project
    },
    {
        name: "contact",
        label: "Contact",
        path: "/contact",
        component: ContactPage
    },

])

export default Routes;

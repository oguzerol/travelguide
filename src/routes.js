import React from 'react';
import {Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage';
import AboutMe from './pages/aboutme';
import NoMatch from './pages/nomatch';


export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutMe} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}


  
 
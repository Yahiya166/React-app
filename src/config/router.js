import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../container/Home.js';
import About from '../container/About.js';


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
            </Router>
        )
    }
}


export default AppRouter;
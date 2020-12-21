import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CallingApi from './ApiCall/CallingApi';
import HomePage from "./ApiCall/homepage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/home" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/" exact>
                            <CallingApi/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
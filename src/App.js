import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Route,
    Switch,
} from 'react-router';

import { ConnectedNotificationSystem } from './components/common/notification_system';
import Home from './views/home';
import { ConnectedLoginPage } from './views/login';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.css';

class App extends Component {
    render() {
        console.log(<Routes />);
        return (
            <Routes />
        );
    }
}   

export default App;

const Setup = (props) => {
    return (
        <div
            id="root-view-container">
            <ConnectedNotificationSystem />
        </div>
    )
}

const Routes = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Setup} />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={ConnectedLoginPage} />
                </Switch>
            </div>
        </Router>
    </Provider>
)
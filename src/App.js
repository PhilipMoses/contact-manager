import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddUser from './components/users/AddUser';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/users/add" component={AddUser} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Login from './pages/Login/Login.jsx';
import Admin from './pages/Admin/Admin.jsx';
require('./pushNotifications.js');
require('./service-worker.js');


class App extends Component {

  


  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/leaderboard" component={Leaderboard} /> 
            <Route exact path="/profile" component={Profile} /> 
            <Route exact path="/admin" component={Admin} /> 
            <Route component={Login} />       
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

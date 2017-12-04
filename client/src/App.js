import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Login from './pages/Login/Login.jsx';
import Admin from './pages/Admin/Admin.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Authenticate from './utils/authenticate.js';
import Footer from './components/Footer/footer.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} /> 
            <Route exact path="/dashboard" component={Authenticate(Dashboard)} />
            <Route exact path="/leaderboard" component={Authenticate(Leaderboard)} /> 
            <Route exact path="/profile" component={Authenticate(Profile)} /> 
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/admin" component={Admin} /> 
            <Route component={Login} />       
          </Switch>
          
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

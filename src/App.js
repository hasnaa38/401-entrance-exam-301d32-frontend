import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FavWatch from './components/FavWatch';
export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* @todo show login button and hide the list for unauthenticated users */}
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {/* @todo show logout button (ABOVE) and show items list components for authenticated users */}
        {this.props.auth0.isAuthenticated &&
          <Switch>
            <Route exact path='/'><Home email={this.props.auth0.user.email} /></Route>
            <Route path='/likes'><FavWatch email={this.props.auth0.user.email} /></Route>
          </Switch>}
        <Footer />
      </Router>
    )
  }
}

export default withAuth0(App);

import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import './App.css';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import LoginPage from './../login/LoginPage'
import Cadastro from './../cadastro/CadastroPage'
import HomePage from './../home/HomeLoader'


class App extends Component {
  render() {
    return (
      <div>
        <Route>
            <Switch>
                <Route exact path='/' component={ LoginPage } />
                <Route path='/cadastro' component={ Cadastro } />
                <Route path='/home' component={ HomePage } />
            </Switch>
        </Route>
      </div>
      );
    }
  }
  export default App;
  
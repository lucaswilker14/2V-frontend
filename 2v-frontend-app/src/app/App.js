import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import './App.css';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import LoginPage from './../login/LoginPage'
import Cadastro from './../cadastro/CadastroPage'
import Home from './../home/Home'


class App extends Component {
  render() {
    return (
      <div>
      <Route>
        <Switch>
            <Route exact path='/' component={ LoginPage } />
            <Route exact path='/cadastro' component={ Cadastro } />
            <Route exact path='/home' component={ Home } />
        </Switch>
      </Route>
      
      </div>
      );
    }
  }
  export default App;
  
import React, { Component } from 'react';
import './App.css';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import LoginPage from './../login/LoginPage'
import Cadastro from './../cadastro/CadastroPage'
import Home from './../home/Home'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="AppImage">
        <Switch>
            <Route exact path='/' component={ LoginPage } />
            <Route exact path='/cadastro' component={ Cadastro } />
            <Route exact path='/home' component={ Home } />
        </Switch>
            
      </div>
      );
    }
  }
  export default App;
  
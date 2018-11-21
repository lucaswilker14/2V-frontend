import React, { Component } from 'react';
import './App.css';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import LoginPage from './../login/LoginPage'
import Cadastro from './../cadastro/CadastroPage'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="AppImage">
        <Switch>
            <Route exact path='/' component={ LoginPage } />
            <Route path='/cadastro' component={ Cadastro } />
        </Switch>
      </div>
      );
    }
  }
  
  export default App;
  
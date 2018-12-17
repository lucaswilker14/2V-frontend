import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { isAuthenticated, isAdmin } from '../auth/auth'

import LoginPage from './../login/LoginPage'
import Cadastro from './../cadastro/CadastroPage'
import HomePage from './../home/HomeLoader'
import NotFoundPage from '../notFound/NotFound'
import AdminRoute from '../admin/HomeAdmin'


const PrivateRouteHome = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        isAuthenticated() ? <Component {...props}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
    )} />
}
const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        isAuthenticated() && isAdmin() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
}
class App extends Component {

    render() {
        return (
            <div>
                <Route>
                    <Switch>
                        <Route exact path='/' component={LoginPage} />
                        <Route path='/cadastro' component={Cadastro} />
                        <PrivateRouteHome path='/home' component={HomePage} />
                        <PrivateRouteAdmin path='/admin/home' component={AdminRoute} />
                        <Route path='*' component={NotFoundPage} />
                    </Switch>
                </Route>
            </div>
        );
    }
}
export default App;

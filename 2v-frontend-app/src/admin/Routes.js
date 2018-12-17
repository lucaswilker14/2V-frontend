import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListUsers from './ListUsers'
import SystemHour from './SystemHour'
import AboutPage from '../about/AboutPage'
import AdminProfile from '../userProfile/UserProfile'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/admin/home' render={() => (<AdminProfile />)} />
                <Route path='/admin/about' render={() => (<AboutPage />)} />
                <Route path='/admin/home/users' render={() => (<ListUsers />)} />
                <Route path='/admin/home/criarAdmin' render={() => (<h1 className='text-center'> Pagina de Criação de admin Não implementada :$</h1>)} />
                <Route path='/admin/home/systemDate' render={() => (<SystemHour />)} />
            </div>
        )
    }
}

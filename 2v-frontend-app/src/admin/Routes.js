import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path='/home/admin/users' render={() => (<h1> LISTA DE USERS </h1>)} />
                <Route path='/home/admin/criarAdmin' render={() => (<h1> Pagina de Criação de admin </h1>)} />
                <Route path='/home/admin/systemDate' render={() => (<h1> HORA DO SISTEMA</h1>)} />
            </div>
        )
    }
}

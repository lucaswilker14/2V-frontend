import React, { Component } from 'react'
import axios from 'axios'
import './home.css'
import '../loaders/loader.css'

import NavBar from '../navbar/NavBarPage'
// import SideBar from '../sidebar/Sidebar'

export default class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userLogged: []
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount = () => {
        this.listen();
    }

    renderUser(user) {
        return (
            <div>
                <li>Nome: {user.firstName}</li>
                <li>Sobrenome: {user.secondName}</li>
                <li>E-mail: {user.email}</li>
            </div>
        )
    }

    logout() {
        this.props.history.push('/');
        localStorage.clear();
    }

    listen() {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'get',
            url: 'http://localhost:3000/api/2V/user/' + userId
        }

        axios(request).then((response) => {
            this.setState({ userLogged: response.data.data })
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <NavBar/>
                <h1 style={{textAlign: 'center'}}>
                    <ul>
                        {this.renderUser(this.state.userLogged)}
                    </ul>
                </h1>
            </div>
        )
    }
}

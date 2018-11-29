import React, { Component } from 'react'
import image from '../images/EU_LINDO.jpg'
import axios from 'axios'


export default class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userLogged: []
        }
    }

    componentDidMount = () => {
        this.listen();
    }

    renderUser(user) {
        return (
            <h1 className="text-center" style={{ marginTop: "10px" }}>
                <li>Nome: {user.firstName}</li>
                <li>Sobrenome: {user.secondName}</li>
                <li>E-mail: {user.email}</li>
            </h1>
        )
    }

    // logout() {
    //     this.props.history.push('/');
    //     localStorage.clear();
    // }

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
            <div>
                <div className="d-flex justify-content-around" style={{ margin: "100px" }}>
                    <ul>
                        <img className="mx-auto d-block" src={image} style={{ maxHeight: "40%", borderRadius: "100px" }} alt="autoretrato"></img>
                        {this.renderUser(this.state.userLogged)}
                    </ul>
                </div>
            </div>
        )
    }
}
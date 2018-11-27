import React, { Component } from 'react'
import axios from 'axios'
import './home.css'
import '../loaders/loader.css'
import { Container } from "mdbreact";

import styled from "styled-components";

import image from '../images/EU_LINDO.jpg'

import NavBar from '../navbar/NavBarPage'
import SideBar from '../sidebar/SideBar'

const Navigation = styled.div`
  display: flex;
  width: 220px;
  flex-shrink: 0;
  background: linear-gradient(#45cafc, #303f9f)!important;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;


export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

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
            <h1 className="text-center" style={{ marginTop: "10px" }}>
                <li>Nome: {user.firstName}</li>
                <li>Sobrenome: {user.secondName}</li>
                <li>E-mail: {user.email}</li>
            </h1>
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
            <div>

                <Container fluid style={{ padding: "0%" }}>
                    <NavBar />
                </Container>
                <AppContainer>
                    <Navigation>
                        <SideBar style={{ fontSize: "medium" }} />
                    </Navigation>
                    <Body>
                        <div className="d-flex justify-content-around" style={{ margin: "100px" }}>
                            <ul>
                                <img className="mx-auto d-block" src={image} style={{ maxHeight: "40%", borderRadius: "100px" }} alt="autoretrato"></img>
                                {this.renderUser(this.state.userLogged)}
                            </ul>
                        </div>
                    </Body>
                </AppContainer>
            </div>
        )
    }
}

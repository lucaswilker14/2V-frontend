import React, { Component } from 'react'
import './home.css'
import '../loaders/loader.css'

import { Route } from 'react-router-dom'

import { Container } from "mdbreact";
import styled from "styled-components";

import NavBar from '../navbar/NavBarPage'
import SideBar from '../sidebar/SideBar'

//para a navbar
import DashBoard from '../dashboard/Dashboard'
import UserProfile from '../userProfile/UserProfile'
import About from '../about/AboutPage'

//para a sidebar
import Iemprestado from '../item/itemEmprestado/ItemEmprestadoPage';
import Idevolvido from '../item/itemDevolvido/ItemDevolvido';
import FormItem from '../item/itemEmprestado/formItem';

const Navigation = styled.div`
  display: flex;
  width: 220px;
  flex-shrink: 0;
  background: linear-gradient(to bottom right, #2096ff, #05ffa3)!important;
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


export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Container fluid style={{ padding: "0%" }}>
                    <NavBar isAdmin={false} color="aqua-gradient"/>
                </Container>

                <AppContainer>
                    <Navigation>
                        <SideBar isAdmin={false} style={{ fontSize: "medium" }} />
                    </Navigation>
                    <Body>
                        <Route exact path='/home' render={() => (<DashBoard />)} />
                        <Route path='/home/about' render={() => (<About />)} />
                        <Route path='/home/iemprestados' render={() => (<Iemprestado />)} />
                        <Route path='/home/idevolvidos' render={() => (<Idevolvido />)} />
                        <Route path='/home/registeritem' render={() => (<FormItem />)} />
                        <Route path='/home/meusdados' render={() => (<UserProfile />)} />
                    </Body>
                </AppContainer>

            </div>
        )
    }
}

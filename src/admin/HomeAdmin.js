import React, { Component } from 'react'

import '../loaders/loader.css'

import { Route } from 'react-router-dom'

import { Container } from "mdbreact";
import styled from "styled-components";

import NavBar from '../navbar/NavBarPage'
import SideBar from '../sidebar/SideBar'

//para a navbar
import AdminRoutes from './Routes'


const Navigation = styled.div`
  display: flex;
  width: 220px;
  flex-shrink: 0;
  background: linear-gradient(to bottom right, #b71c1c, #4a148c)!important;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;


export default class HomeAdmin extends Component {
  
    render() {
        return (
            <div>
                <Container fluid style={{ padding: "0%" }}>
                    <NavBar isAdmin={true} color="peach-gradient"/>
                </Container>

                <AppContainer>
                    <Navigation>
                        <SideBar isAdmin={true} style={{ fontSize: "medium" }} />
                    </Navigation>
                    <Body>
                        <Route path='/' render={() => (<AdminRoutes />)} />
                    </Body>
                </AppContainer>

            </div>
        )
    }
}

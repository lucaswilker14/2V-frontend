import React, { Component } from 'react'
import './home.css'
import '../loaders/loader.css'

// import { Route, Switch } from 'react-router-dom'

import { Container } from "mdbreact";
import styled from "styled-components";
import NavBar from '../navbar/NavBarPage'
import SideBar from '../sidebar/SideBar'
import UserProfile from '../userProfile/UserProfile'

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

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {}
        // this.logout = this.logout.bind(this);
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
                        <UserProfile/>
                    </Body>
                </AppContainer>

            </div>
        )
    }
}

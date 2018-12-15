import React, { Component } from 'react'

// import styled from "styled-components";
import { SideNav, Nav, NavIcon } from "react-sidenav";
import { Fa } from "mdbreact";
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'

const Text = {
    marginTop: "9px",
    paddingLeft: "8px",
    fontSize: "1.5rem"
}

const theme = {
    hoverBgColor: "#bdbdbd",
    selectionBgColor: "#fff",
    selectionIconColor: "#1a237e"
};

const theme2 = {
    marginTop: "10px",
    paddingLeft: "20px",
    color: "white"

}

export default class SideBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAdmin: false
        }
    }

    isAdmin = () => {
        let isAdmin = jwt.decode(localStorage.getItem('token')).role;
        isAdmin === 'Admin' ? this.setState({ isAdmin: true }) : this.setState({ isAdmin: false });
    }

    componentWillMount = () => {
        this.isAdmin();
    }

    render() {
        console.log(this.state.isAdmin);
        return (

            <SideNav theme={theme} >

                <Link to='/home'>
                    <Nav id='userprofile' style={theme2}>
                        <NavIcon style={{ paddingLeft: "20px" }}>
                            <Fa style={{ fontSize: "1.75rem" }} icon="home" />
                            <p style={Text}> Página Inicial </p>
                        </NavIcon>
                    </Nav>
                </Link>

                {!this.state.isAdmin ?
                    <Link to='/home/iemprestados'>
                        <Nav id='emprestado' style={theme2}>
                            <NavIcon style={{ paddingLeft: "20px" }}>
                                <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-up" />
                                <p style={Text}> Item Emprestados </p>
                            </NavIcon>
                        </Nav>
                    </Link>
                    :
                    <Link to='/home/admin/users'>
                        <Nav id='emprestado' style={theme2}>
                            <NavIcon style={{ paddingLeft: "20px" }}>
                                <Fa style={{ fontSize: "1.75rem" }} icon="users" />
                                <p style={Text}> Lista de Usuários </p>
                            </NavIcon>
                        </Nav>
                    </Link>
                }

                {!this.state.isAdmin ?
                    <Link to='/home/idevolvidos'>
                        <Nav style={theme2}>
                            <NavIcon>
                                <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-down" />
                                <p style={Text}> Items Devolvidos </p>
                            </NavIcon>
                        </Nav>
                    </Link>
                    :
                    <Link to='/home/admin/criarAdmin'>
                        <Nav style={theme2}>
                            <NavIcon>
                                <Fa style={{ fontSize: "1.75rem" }} icon="user-secret" />
                                <p style={Text}> Criar Admin </p>
                            </NavIcon>
                        </Nav>
                    </Link>

                }

                <Link to='/home/meusdados'>
                    <Nav style={theme2}>
                        <NavIcon>
                            <Fa style={{ fontSize: "1.75rem" }} icon="database" />
                            <p style={Text}>Meus Dados</p>
                        </NavIcon>
                    </Nav>
                </Link>

                {this.state.isAdmin ?
                    <Link to='/home/systemDate'>
                        <Nav style={theme2}>
                            <NavIcon>
                                <Fa style={{ fontSize: "1.75rem" }} icon="clock-o" />
                                <p style={Text}> Alterar hora do Sistema </p>
                            </NavIcon>
                        </Nav>
                    </Link>
                    :
                    ''
                }

            </SideNav>

        )
    }
}

import React, { Component } from 'react'

// import styled from "styled-components";
import { SideNav, Nav, NavIcon } from "react-sidenav";
import { Fa } from "mdbreact";
import { Link } from 'react-router-dom'

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
    render() {
        return (

            <SideNav theme={theme} >

                <Link to='/home/iemprestados'>
                    <Nav id='emprestado' style={theme2}>
                        <NavIcon style={{ paddingLeft: "20px" }}>
                            <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-up" />
                            <p style={Text}> Item Emprestados </p>
                        </NavIcon>
                    </Nav>
                </Link>

                <Link to='/home/idevolvidos'>
                    <Nav style={theme2}>
                        <NavIcon>
                            <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-down" />
                            <p style={Text}> Items Devolvidos </p>
                        </NavIcon>
                    </Nav>
                </Link>

                <Link to='/home/meusdados'>
                    <Nav style={theme2}>
                        <NavIcon>
                            <Fa style={{ fontSize: "1.75rem" }} icon="database" />
                            <p style={Text}>Meus Dados</p>
                        </NavIcon>
                    </Nav>
                </Link>

            </SideNav>

        )
    }
}

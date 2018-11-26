import React, { Component } from 'react'

// import styled from "styled-components";
import { SideNav, Nav, NavIcon } from "react-sidenav";
import { Fa } from "mdbreact";

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


// const SideNav = withRR4();

export default class SideBar extends Component {
    render() {
        return (

            <SideNav theme={theme} >
                <Nav style={theme2}>
                    <NavIcon style={{ paddingLeft: "20px" }}>
                        <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-up" />
                        <p style={Text}> Item Emprestados </p>
                    </NavIcon>
                </Nav>
                <Nav style={theme2}>
                    <NavIcon>
                        <Fa style={{ fontSize: "1.75rem" }} icon="arrow-circle-o-down" />
                        <p style={Text}> Items Devolvidos </p>
                    </NavIcon>
                </Nav>
                <Nav style={theme2}>
                    <NavIcon>
                        <Fa style={{ fontSize: "1.75rem" }} icon="database" />
                        <p style={Text}>Meus Dados</p>
                    </NavIcon>
                </Nav>
                <Nav style={theme2}>
                    <NavIcon>
                        <Fa style={{ fontSize: "1.75rem" }} icon="question-circle-o" />
                        <p style={Text}>Sobre</p>
                    </NavIcon>
                </Nav>
            </SideNav>

        )
    }
}

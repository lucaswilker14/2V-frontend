import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Fa, MDBTooltip } from "mdbreact";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <Navbar style={{ margin: "auto", borderRadius: "0px" }} color="aqua-gradient" dark expand="md">
                <NavbarBrand style={{ fontSize: "3rem" }}>
                    <strong className="white-text">2V   Vai-e-Volta</strong>
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.toggleCollapse}
                />
                <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

                    <NavbarNav right>
                        <NavItem>
                            <MDBTooltip tooltipContent="Sobre" placement="left" />
                            <NavLink to="/home/about">
                                <Fa style={{ fontSize: "2rem" }} icon="question-circle-o" />
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/">
                                <Fa style={{ fontSize: "2rem" }} icon="sign-out" />
                            </NavLink>
                        </NavItem>

                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;
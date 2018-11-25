import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Fa } from "mdbreact";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('ENTROU AAUI ');
    }



    render() {
        return (
            <Navbar color="red" dark expand="md">
                <NavbarBrand style={{ fontSize: "3rem" }}>
                    <strong className="white-text">2V</strong>
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.toggleCollapse}
                />
                <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <NavbarNav left>
                        <NavItem style={{ fontSize: "2rem" }}>
                            <NavLink to="#!">Home</NavLink>
                        </NavItem>
                    </NavbarNav>

                    <NavbarNav right>
                        <NavItem>
                            <NavLink to="#!">
                                <Fa style={{ fontSize: "2rem" }} icon="gear" />
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
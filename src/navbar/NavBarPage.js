import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Fa, MDBTooltip } from "mdbreact";

class NavbarPage extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isOpen: false
      }
    }
    

    render() {
        let {color, isAdmin} = this.props;
        if(isAdmin) color=null;
        
        return (
            <Navbar style={{ background: "linear-gradient(to right, #b71c1c, #4a148c)", margin: "auto", borderRadius: "0px" }} color={color} dark expand="md">
                <NavbarBrand style={{ fontSize: "3rem" }}>
                    <strong className="white-text">2V   Vai-e-Volta</strong>
                </NavbarBrand>
                <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <NavbarNav right>
                        {isAdmin === false ?
                            <NavItem>
                                <MDBTooltip tooltipContent="Sobre" placement="left" />
                                <NavLink to="/home/about">
                                    <Fa style={{ fontSize: "2rem" }} icon="question-circle-o" />
                                </NavLink>
                            </NavItem>
                            :   
                            ''
                        }

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
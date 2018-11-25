import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Fa, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } from 'mdbreact';

export default class SideBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLeftOpen: false,
         isRightOpen: false
      };
   }

   // Slide out buttons event handlers
   handleToggleClickA = () => {
      this.setState({
         isLeftOpen: !this.state.isLeftOpen
      })
   }

   render() {
      // Because the toggling buttons are nearly identical, we create a function to render them:
      const createButton = (onClick, side) => {
         return <div style={{ width: "50%", textAlign: "center" }}>
            <a href="#!" onClick={onClick} key={'toggleThe' + side + 'SideNav'}><Fa icon="bars" size="5x"></Fa></a>
         </div>
      }

      return (
         <Container>

            <Row style={{ height: "80vh", alignItems: "center" }} >
               {createButton(this.handleToggleClickA, "Left")}
            </Row>

            <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" hidden triggerOpening={this.state.isLeftOpen} breakWidth={1300} className="deep-purple darken-4">
               <li>
                  <ul className="social">
                     <li><a href="#!"><Fa icon="facebook"></Fa></a></li>
                     <li><a href="#!"><Fa icon="pinterest"></Fa></a></li>
                     <li><a href="#!"><Fa icon="google-plus"></Fa></a></li>
                     <li><a href="#!"><Fa icon="twitter"></Fa></a></li>
                  </ul>
               </li>
               <SideNavNav>
                  <SideNavCat id="submit-blog-cat" name="Submit blog" icon="chevron-right">
                     <SideNavLink>Submit listing</SideNavLink>
                     <SideNavLink>Registration form</SideNavLink>
                  </SideNavCat>
                  <SideNavCat id="instruction-cat" name="Instruction" icon="hand-pointer-o" href="#">
                     <SideNavLink>For bloggers</SideNavLink>
                     <SideNavLink>For authors</SideNavLink>
                  </SideNavCat>
                  <SideNavCat id="about-cat" name="About" icon="eye">
                     <SideNavLink>Instruction</SideNavLink>
                     <SideNavLink>Monthly meetings</SideNavLink>
                  </SideNavCat>
                  <SideNavCat id="contact-me-cat" name="Contact me" icon="envelope-o">
                     <SideNavLink>FAQ</SideNavLink>
                     <SideNavLink>Write a message</SideNavLink>
                  </SideNavCat>
               </SideNavNav>
            </SideNav>
         </Container>
      );
   }
}

import React, {} from 'react';
import { SideNavCat, SideNavNav, SideNavLink } from 'mdbreact';

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
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
  handleToggleClickB = () => {
    this.setState({
      isRightOpen: !this.state.isRightOpen
    })
  }

  render() {
    return (
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
    );
  }
}

export default SideNavPage;
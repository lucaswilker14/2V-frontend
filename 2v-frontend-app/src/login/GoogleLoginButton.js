import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

import { Button, Fa } from 'mdbreact';


export default class SocialLogin extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         userID: '',
         name: '',
         email: ''
      }
    }

    responseGoogle = response => {
        // const name = response;
        // console.log(name.split(' ')[0]);

        // const request = {
        //     method: 'post',
        //     url: 'http://localhost:3000/api/2V/user',
        //     data: {
        //         firstName: this.state.firstName,
        //         secondName: this.state.secondName,
        //         username: this.state.username,
        //         phone: this.state.phone,
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        // }

        console.log(response);
    }
    
    
    render() {
        
        return (
                <GoogleLogin
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} size="lg" color="white" rounded className="z-depth-1a">
                            <Fa icon="google-plus" className="blue-text" />
                        </Button>
                    )}                    
                    clientId="944635213987-0ocq4gatvfgnqmlplh0baop4arekolln.apps.googleusercontent.com"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />       

            )
        }
    }
    

// <Button size="lg" type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
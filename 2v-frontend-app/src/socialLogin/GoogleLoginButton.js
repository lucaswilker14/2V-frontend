import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

import { Button, Fa } from 'mdbreact';
// import axios from 'axios'



export default class SocialLogin extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         userID: '',
         name: '',
         email: '',
         token: ''
      }
    }

    responseGoogle = response => {
        
        console.log(response)
        //abrir o modal pra preencher o resto dos dados

        // const request = {
        //     method: 'get',
        //     url: 'http://localhost:3000/cadastro',
        //     data: {
        //         token: response.tokenId
        //     }
        // }     
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
                    >
                           
                </GoogleLogin>

            )
        }
    }
    

// <Button size="lg" type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
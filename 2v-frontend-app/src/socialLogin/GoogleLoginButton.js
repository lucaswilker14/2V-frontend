import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

import { Button, Fa } from 'mdbreact';

// import Home from '../home/Home'
// import axios from 'axios'



export default class SocialLogin extends Component {
    
    constructor(props) {
      super(props)
      this.state = {
         accessToken: '',
      }
    }

    //na montagem do componente eu coloco dentro
    //da instacia de props a referencia
    componentDidMount() {
        console.log('entra 1');
        this.props.onRef(this)
      }

    //depois apago
    componentWillUnmount() {
        console.log('entra 3');
        this.props.onRef(undefined)
      }
    

    responseGoogle = response => {
        console.log('entra 2');
        const state = Object.assign({}, this.state); //criando uma copia
        state['accessToken'] = response.tokenId;
        this.setState(state); 
    }

    returnToken = () => {
        return this.state.accessToken;
    }

    render() {
        return (
            <div>
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
            </div>
            

            )
        }
    }
    

// <Button size="lg" type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
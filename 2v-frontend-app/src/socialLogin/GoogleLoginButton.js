import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

import { Button, Fa } from 'mdbreact';

// import Home from '../home/Home'
// import axios from 'axios'

export default class SocialLogin extends Component {



    constructor(props) {
        super(props)
        this.state = {
            user: '',
            message: 'Usuario Logado com Sucesso!'
        }
    }

    //na montagem do componente eu coloco dentro
    //da instacia de props a referencia
    componentDidMount() {
        this.props.onRef(this)
    }

    //depois apago
    componentWillUnmount() {
        this.props.onRef(undefined)
    }


    responseGoogle = response => {
        const state = Object.assign({}, this.state); //criando uma copia
        state['user'] = response.profileObj;
        this.setState(state);
    }

    returnToken = () => {
        return this.state.user;
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
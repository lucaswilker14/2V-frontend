import React, { Component } from 'react'

import { Button, Fa } from 'mdbreact';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'



export default class FaceLoginButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: ''
        }
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="267536474107823"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} size="lg" type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                        <Fa icon="facebook" className="blue-text text-center" />
                    </Button>
                )}
            />
        )
    }
}

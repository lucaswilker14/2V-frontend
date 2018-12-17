import React, { Component } from 'react'
import CadastroPage from './CadastroPage'
export default class CadastroSocial extends Component {
    render() {

        const { response } = this.props.location.state;
        console.log(response);
        const { profileObj } = response
        console.log(profileObj)
        return (
            <CadastroPage
                history={this.props.history}
                isToast={true}
                firstName={profileObj.givenName}
                secondName={profileObj.familyName}
                email={profileObj.email}
                imageGoogle={profileObj.imageUrl}
            />
        )
    }
}

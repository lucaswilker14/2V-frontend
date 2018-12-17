import React, { Component } from 'react'
import CadastroPage from './CadastroPage'
export default class CadastroSocial extends Component {
    render() {

        const { response } = this.props.location.state;
        const { profileObj } = response
        console.log(profileObj.imageUrl)
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

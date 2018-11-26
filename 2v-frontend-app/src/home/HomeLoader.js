import React, { Component } from 'react'

import LoaderPage from '../loaders/Loader'
import HomePage from './HomePage'
import './home.css'
import '../loaders/loader.css'


export default class HomeLoader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({ isLoading: false }), 2000);
    }

    render() {

        return (
            this.state.isLoading ? <LoaderPage /> : <HomePage history={this.props.history} />

        )
    }
}


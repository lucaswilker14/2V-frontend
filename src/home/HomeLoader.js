import React, { Component } from 'react'

import LoaderPage from '../loaders/Loader'
import LoaderPageAdmin from '../loaders/LoaderAdmin'
import HomePage from './Home'
import HomePageAdmin from '../admin/HomeAdmin'
import jwt from 'jsonwebtoken'

import './home.css'
import '../loaders/loader.css'
import '../loaders/loaderAdmin.css'


export default class HomeLoader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({ isLoading: false }), 5000);
    }

    render() {
        const { role } = jwt.decode(localStorage.getItem('token'))

        let loader;
        let page;

        if (role === undefined) {
            loader = <LoaderPage />
            page = <HomePage history={this.props.history} />

        } else {
            loader = <LoaderPageAdmin />
            page = <HomePageAdmin history={this.props.history} />
        }

        return (
            this.state.isLoading ? loader : page
        )
    }
}


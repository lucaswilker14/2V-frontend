import React, { Component } from 'react'

import LoaderPage from '../loaders/Loader'
import './home.css'
import '../loaders/loader.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount = () => {
        setTimeout(() => this.setState({ isLoading: false }), 300000);
    }
    
    render() {
        return (
            this.state.isLoading ? <LoaderPage/> : <h1> H O M E</h1>
            )
        }
    }
    
    
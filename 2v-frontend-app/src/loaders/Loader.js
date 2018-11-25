import React, { Component } from 'react'
import './loader.css'

export default class Loader extends Component {
    render() {
        return (

            <div className="group">
                <div className="bigSqr">
                    <div className="square first"></div>
                    <div className="square second"></div>
                    <div className="square third"></div>
                    <div className="square fourth"></div>
                </div>
                <div className="text">Lendo seus dados...</div>
            </div>
        )
    }
}

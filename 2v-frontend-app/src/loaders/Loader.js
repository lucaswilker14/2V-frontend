import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './loader.css'

export default class Loader extends Component {

    componentDidMount = () => {
        var html = ReactDOM.findDOMNode(this).parentElement.parentElement.parentElement.parentElement;
        var body = ReactDOM.findDOMNode(this).parentElement.parentElement.parentElement
        var root = ReactDOM.findDOMNode(this).parentElement.parentElement
        var div = ReactDOM.findDOMNode(this).parentElement
        html.setAttribute('style', 'height: 100%');
        body.setAttribute('style', 'height: 100%');
        root.setAttribute('style', 'height: 100%');
        div.setAttribute('style', 'height: 100%');
    }

    componentWillUnmount = () => {
        console.log('componente morreu');
        var html = ReactDOM.findDOMNode(this).parentElement.parentElement.parentElement.parentElement;
        var body = ReactDOM.findDOMNode(this).parentElement.parentElement.parentElement
        var root = ReactDOM.findDOMNode(this).parentElement.parentElement
        var div = ReactDOM.findDOMNode(this).parentElement
        
        html.setAttribute('style', 'height: null');
        body.setAttribute('style', 'height: null');
        root.setAttribute('style', 'height: null');
        div.setAttribute('style', 'height: null');
    }
    
    

    render() {
        return (
            <div ref={'group'} className="group">
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

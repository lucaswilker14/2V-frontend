import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './loaderAdmin.css'

export default class LoaderAdmin extends Component {

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

    render() {
        return (

            <div className="preloader-1 group">
                <div style={{marginTop: '300px'}}>Bem-vindo, Admin!</div>
                <div style={{fontSize: "10px"}}>Lendo seus dados...</div>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
                <span className="line line-5"></span>
                <span className="line line-6"></span>
                <span className="line line-7"></span>
                <span className="line line-8"></span>
                <span className="line line-9"></span>
                <span className="line line-10"></span>
                <span className="line line-11"></span>
                <span className="line line-12"></span>
                <span className="line line-13"></span>
                <span className="line line-14"></span>
                <span className="line line-15"></span>
                <span className="line line-16"></span>
                <span className="line line-17"></span>
                <span className="line line-18"></span>
                <span className="line line-19"></span>
                <span className="line line-20"></span>
                <span className="line line-21"></span>
                <span className="line line-22"></span>
                <span className="line line-23"></span>
            </div>
        )
    }
}

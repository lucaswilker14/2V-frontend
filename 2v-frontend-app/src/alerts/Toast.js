import React, { Component } from 'react'
import { ToastContainer } from 'mdbreact';


export default class Toast extends Component {
    render() {
        return (

            <ToastContainer
                style={{ fontSize: "medium" }}
                position="top-right"
                autoClose={5000}
                hideProgressBar
                closeButton={false}
                newestOnTop={false}
                rtl={false}
                draggable={false}
                pauseOnHover={false}
            />
        )
    }
}

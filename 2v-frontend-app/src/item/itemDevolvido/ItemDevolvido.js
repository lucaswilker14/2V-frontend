import React, { Component } from 'react'
import CardItem from '../cards/Cards'

import { ToastContainer, toast } from "mdbreact";
// import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ItemDevolvido extends Component {

    constructor(props) {
        super(props)

        this.state = {
            returnedItems: [],
            modal: false
        }
    }

    componentDidMount = () => {
        this.getItems();
    }

    getItems = () => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'get',
            url: 'http://localhost:3000/api/2V/user/' + userId + '/returnedItems'
        }

        axios(request).then((response) => {
            this.setState({ returnedItems: response.data.data })
        });
    }

    deleteItem = (itemId) => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'delete',
            url: 'http://localhost:3000/api/2V/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            toast.warn(response.data.message);
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ marginTop: "10px" }}> ITEMS DEVOLVIDOS </h1>

                <div style={{ paddingLeft: '30px' }}>
                    <CardItem isBorrewed={false} deleteItem={this.deleteItem} items={this.state.returnedItems} />
                </div>
                
                <ToastContainer
                    style={{ fontSize: "medium" }}
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    closeButton={false}
                    newestOnTop={false}
                    rtl={false}
                    draggable={false}
                    pauseOnHover={false}
                >
                </ToastContainer>
            </div>
        )
    }

}

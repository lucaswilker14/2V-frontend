import React, { Component } from 'react'
import CardItem from '../cards/Cards'

import { ToastContainer, toast } from "mdbreact";
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_ROUTE_HEROKU } from '../../env'
// import { API_ROUTE_LOCAL } from '../../env'

import './itemDev.css'


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
            url: API_ROUTE_HEROKU + '/user/' + userId + '/returnedItems'
        }

        axios(request).then((response) => {

            this.setState({ returnedItems: response.data.data })
        }).catch((err) => {
            this.setState({ returnedItems: 0 })
        });;
    }

    deleteItem = (itemId) => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'delete',
            url: API_ROUTE_HEROKU + '/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            this.getItems();
            if (this.state.returnedItems.length > 0) toast.success(response.data.message);
            else toast.error('Erro ao devolver item!');
        }).catch((err) => {
            toast.error('Impossível deletar Item');
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center txt-h1"> ITEMS DEVOLVIDOS </h1>


                {this.state.returnedItems.length > 0 ?
                    <div className='card-padding'>
                        <CardItem isBorrewed={false} deleteItem={this.deleteItem} items={this.state.returnedItems} />
                    </div>
                    :
                    <h1 className="text-center txt-h1" style={{ marginTop: "150px" }}> Nenhum item! </h1>
                }


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

import React, { Component } from 'react'
import { ToastContainer, toast } from "mdbreact";

import './itemEmp.css'

// import { Link } from 'react-router-dom'
import axios from 'axios'

import CardItem from '../cards/Cards'
import { API_ROUTE_HEROKU } from '../../env'


export default class ItemEmprestado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
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
            url: API_ROUTE_HEROKU + '/user/' + userId + '/items'
        }

        axios(request).then((response) => {
            this.setState({ items: response.data.data })
        });
    }

    returnItem = (itemId) => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'put',
            url: API_ROUTE_HEROKU + '/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            toast.success(response.data.message);
        }).catch((err) => {
            toast.error('Erro ao devolver item!');
        });

    }

    sendEmail = (itemId) => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'get',
            url: API_ROUTE_HEROKU + '/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            console.log(response.data);
            toast.success(response.data);
        }).catch((err) => {
            toast.error('Erro ao enviar o email.');
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center txtH1"> ITEMS EMPRESTADOS </h1>

                <div className='itemEmp'>
                    <CardItem isBorrewed={true} sendEmail={this.sendEmail} returnedItem={this.returnItem} items={this.state.items} />
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
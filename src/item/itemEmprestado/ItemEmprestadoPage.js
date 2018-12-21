import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'
import axios from 'axios'

import CardItem from '../cards/Cards'
import { API_ROUTE } from '../../env'


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
            url: API_ROUTE + '/user/' + userId + '/items'
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
            url: API_ROUTE +'/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            // toast.success(response.data.message);
            alert(response.data.message);
        });

    }

    sendEmail = (itemId) => {
        var userId = localStorage.getItem('userId');
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'get',
            url: API_ROUTE + '/user/' + userId + '/item/' + itemId
        }


        axios(request).then((response) => {
            console.log(response.data);
            // toast.success(response.data);
            alert(response.data);
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ marginTop: "10px" }}> ITEMS EMPRESTADOS </h1>

                <div style={{ paddingLeft: '30px' }}>
                    <CardItem isBorrewed={true} sendEmail={this.sendEmail} returnedItem={this.returnItem} items={this.state.items} />
                </div>

                <Link to='/home/registeritem'>
                    <MDBBtn size="lg" gradient="aqua" style={{ position: 'fixed', left: '1250px', top: '560px' }}>
                        <MDBIcon style={{ fontSize: "2rem" }} icon="plus" className="mr-1" />
                    </MDBBtn>
                </Link>
            </div>
        )
    }
}


// <ToastContainer
// style={{ fontSize: "medium" }}
// position="top-right"
// autoClose={3000}
// hideProgressBar
// closeButton={false}
// newestOnTop={false}
// rtl={false}
// draggable={false}
// pauseOnHover={false}
// >
// </ToastContainer>
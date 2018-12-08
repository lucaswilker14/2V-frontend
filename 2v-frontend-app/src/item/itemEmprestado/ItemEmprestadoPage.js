import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'
import axios from 'axios'

import CardItem from './Cards'

export default class ItemEmprestado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
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
            url: 'http://localhost:3000/api/2V/user/' + userId + '/items'
        }

        axios(request).then((response) => {
            this.setState({ items: response.data.data })
        });
    }


    render() {
        return (
            <div>
                <h1 className="text-center" style={{ marginTop: "10px" }}> ITEMS EMPRESTADOS </h1>

                <div style={{ paddingLeft: '30px' }}>
                    <CardItem items={this.state.items} />
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

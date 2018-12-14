import React, { Component } from 'react'
import CardItem from '../cards/Cards'

// import { MDBBtn, MDBIcon } from "mdbreact";
// import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ItemDevolvido extends Component {

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
            url: 'http://localhost:3000/api/2V/user/' + userId + '/returnedItems'
        }

        axios(request).then((response) => {
            this.setState({ items: response.data.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ marginTop: "10px" }}> ITEMS DEVOLVIDOS </h1>

                <div style={{ paddingLeft: '30px' }}>
                    <CardItem isBorrewed={false} items={this.state.items} />
                </div>
            </div>
        )
    }

}

import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'


export default class ItemEmprestado extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <h1> PAGINA DE ITEMS EMPRESTADOS </h1>
                <Link to='/home/registeritem'>
                    <MDBBtn size="lg" gradient="aqua">
                        <MDBIcon style={{ fontSize: "2rem" }} icon="plus" className="mr-1" />
                    </MDBBtn>
                </Link>
            </div>
        )
    }
}

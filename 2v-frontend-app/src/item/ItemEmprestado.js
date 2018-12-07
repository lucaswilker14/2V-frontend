import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'


export default class ItemEmprestado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }


    render() {
        return (
            <div>
                <h1 className="text-center" style={{ marginTop: "10px" }}> PAGINA DE ITEMS EMPRESTADOS </h1>
                <Link to='/home/registeritem'>
                    <MDBBtn size="lg" gradient="aqua" style={{position: 'fixed', left: '1250px', top: '560px' }}>
                        <MDBIcon style={{ fontSize: "2rem" }} icon="plus" className="mr-1" />
                    </MDBBtn>
                </Link>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";

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
                <h1>Ainda não foi implementado :)</h1>
                <MDBBtn size="lg" gradient="blue">
                    <MDBIcon style={{ fontSize: "2rem" }} icon="plus" className="mr-1" />
                </MDBBtn>
            </div>
        )
    }
}

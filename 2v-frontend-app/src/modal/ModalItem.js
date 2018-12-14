import React, { Component } from 'react'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Row, MDBCol } from 'mdbreact';

export default class ModalItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false,
        }

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    formatDate = (date) => {
        let a = date.substr(0, 10);
        let b = a.split('-');
        let c = b[2] + '/' + b[1] + '/' + b[0];
        return c;
    }

    handleClick = (itemId) => {
        this.props.returnedItem(itemId);
        this.toggle();
    }

    render() {
        const { element, isBorrewed } = this.props
        return (
            <Container>
                <Button color="primary" onClick={() => this.toggle()} >Ver info</Button>
                <Modal fade={false} isOpen={this.state.modal} toggle={() => this.toggle()} centered>
                    
                <ModalHeader toggle={() => this.toggle()}> <h3>Informações do Item - {element._id}</h3></ModalHeader>
                    
                    <ModalBody>
                        <div>
                            <Row>
                                <MDBCol>
                                    <h4> Nome: {element.name} </h4>
                                </MDBCol>
                                <MDBCol>
                                    <h4> Marca: {element.brand}</h4>
                                </MDBCol>
                                <MDBCol>
                                    <h4>Cor: {element.color}</h4>
                                </MDBCol>
                            </Row>

                            <br></br>

                            <Row>
                                <MDBCol>
                                    <h4> Data de emprestimo: {this.formatDate(element.loan_date)} </h4>
                                </MDBCol>
                                <MDBCol>
                                    <h4> Data de devolução: {this.formatDate(element.return_date)} </h4>
                                </MDBCol>
                            </Row>
                        </div>
                    </ModalBody>
                    
                    {isBorrewed ?
                        <ModalFooter>
                            <Button size="lg" color="secondary" onClick={() => this.toggle()}>Pedir Item</Button>
                            <Button size="lg" color="primary" onClick={() => this.handleClick(element._id)} >Marcar como devolvido</Button>
                        </ModalFooter>
                        :
                        <ModalFooter>
                            <Button size="lg" color="secondary" onClick={() => this.toggle()}>Excluir Item</Button>
                        </ModalFooter>
                    }
                </Modal>
            </Container>
        )
    }
}

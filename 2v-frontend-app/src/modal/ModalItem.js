import React, { Component } from 'react'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

export default class ModalItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const {element} = this.props
        return (
            <div>
                <Button color="primary" onClick={() => this.toggle()} >Ver info</Button>
                <Modal fade={false} isOpen={this.state.modal} toggle={() => this.toggle()} centered>
                    <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
                    <ModalBody>
                        {element.name}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle()}>Close</Button>
                        <Button color="primary">Save changes</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

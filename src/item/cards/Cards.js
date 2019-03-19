import React, { Component } from 'react'
import { Card, CardBody, CardImage, CardTitle, CardText, Col, Row } from "mdbreact";
import Modal from '../../modal/ModalItem'

import './card.css'

export default class Cards extends Component {


    constructor(props) {
      super(props)
      this.state = {}
    }
    

    formatDate = (date) => {
        let a = date.substr(0, 10);
        let b = a.split('-');
        let c = b[2] + '/' + b[1] + '/' + b[0];
        return c;
    }

    createCardsCol = () => {
        const { items, returnedItem, isBorrewed, sendEmail, deleteItem } = this.props
        return items.map((element, i) =>
            <Col size="6" className='card-col' key={element._id}>
                <Card key={i} style={{ marginTop: '30px', marginLeft: '30px' }}>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                    <CardBody>
                        <CardTitle>{element.name + ' ' + element.brand}</CardTitle>
                        <CardText>{'Emprestante:' + element.user_adress.name + '. \nData de empréstimo:  ' + this.formatDate(element.loan_date)}</CardText>
                        <Modal key={i} isBorrewed={isBorrewed} deleteItem={deleteItem} sendEmail={sendEmail} returnedItem={returnedItem} element={element}> Ver </Modal>
                    </CardBody>
                </Card>
            </Col>
        )
    }

    render() {
        return (
            <Row>{this.createCardsCol()}</Row>
        )
    }
}

import React, { Component } from 'react'
import { Card, CardBody, CardImage, CardTitle, CardText, Col, Row} from "mdbreact";
import { Link } from 'react-router-dom'


export default class Cards extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    formatDate = (date) => {
        let a = date.substr(0, 10);
        let b = a.split('-');
        let c = b[2] + '/' + b[1] + '/' + b[0];
        return c;
    }

    createCardsCol = () => {
        const { items } = this.props
        return items.map((element, i) =>
            <Col size="6" style={{ maxWidth: "27rem", top: '10px' }} key={element._id}>
                <Card key={i} style={{ marginTop: '30px', marginLeft: '30px' }}>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                    <CardBody>
                        <CardTitle>{element.name + ' ' + element.brand}</CardTitle>
                        <CardText>{'Emprestante:' + element.user_adress.name + '. \nData de empréstimo:  ' + this.formatDate(element.loan_date)}</CardText>
                        <Link to="#!">Ver</Link>
                    </CardBody>
                </Card>
            </Col>
        )
    }

    render() {
        const {items} = this.props;
        return (
            items.length > 0 ? <Row>{this.createCardsCol()}</Row> : <h1 className="text-center" style={{ marginTop: "150px" }}> Nenhum item emprestado! </h1>
        )
    }
}
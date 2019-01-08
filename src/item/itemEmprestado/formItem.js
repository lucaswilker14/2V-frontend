import React, { Component } from 'react'
import { Container, Card, CardBody, Input, Button, Row, MDBCol, ToastContainer, toast } from 'mdbreact';
import { Link } from 'react-router-dom'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios'

import { API_ROUTE_HEROKU } from '../../env'


export default class formItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            color: '',
            brand: '',

            loan_date: new Date(),
            return_date: new Date(),
            obs: '',

            nameuser: '',
            email: '',
            phone: '',

            street: '',
            number: '',
            neighborhood: '',

            cep: '',
            state: '',
            city: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStardDate = this.handleChangeStardDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    handleChangeStardDate(date) {
        this.setState({ loan_date: date });
    }

    handleChangeEndDate(date) {
        this.setState({ return_date: date });
    }

    handleSubmit(event) {
        this.registerItem();
        event.preventDefault();
    }

    registerItem() {

        const {
            name
            , color
            , brand
            , loan_date
            , return_date
            , obs
            , nameuser
            , email
            , phone
            , street
            , number
            , neighborhood
            , cep
            , state
            , city } = this.state

        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'post',
            url: API_ROUTE_HEROKU + '/user/' + localStorage.getItem('userId'),
            data: {
                name: name,
                color: color,
                brand: brand,
                loan_date: loan_date,
                return_date: return_date,
                obs: obs,
                user_adress: {
                    name: nameuser,
                    email: email,
                    phone: phone,
                    street: street,
                    number: number,
                    neighborhood: neighborhood,
                    cep: cep,
                    state: state,
                    city: city
                }
            }
        }

        axios(request).then((response) => {
            toast.success(response.data.message);

        }).catch((err) => {
            console.log(err);
            toast.error('Impossível Cadastrar Item!')
        });
    }

    render() {
        const estilo = {
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }

        const estilo2 = {
            width: "900px"
        }
        return (
            <Container style={estilo}>
                <Card style={estilo2}>
                    <CardBody>
                        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                            <p className="h2 text-center py-4"> Cadastro de Objeto </p>
                            <div className="grey-text">

                                <Row>
                                    <MDBCol size="4">
                                        <Input name="name" value={this.state.name} onChange={this.handleChange} size="lg" hint="Nome do Objeto a ser emprestado" group type="text" validate success="right" className="form-control" required />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="color" value={this.state.color} onChange={this.handleChange} size="lg" hint="Digite a cor do objeto (opcional)" group type="text" success="right" className="form-control" />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input maxLength='30' minLength='2' name="brand" value={this.state.brand} onChange={this.handleChange} size="lg" hint="Digite a marca do objeto (opcional)" group type="text" success="right" className="form-control" />
                                    </MDBCol>
                                </Row>

                                <Row>
                                    <MDBCol size="4" style={{ fontSize: '1.4rem' }}>
                                        <h5>Data de empréstimo</h5>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={this.state.loan_date}
                                            onChange={this.handleChangeStardDate}
                                            placeholderText="Data de empréstimo"
                                        />
                                    </MDBCol>
                                    <MDBCol size="4" style={{ fontSize: '1.4rem' }}>
                                        <h5>Data de devolução</h5>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={this.state.return_date}
                                            onChange={this.handleChangeEndDate}
                                            placeholderText={"Data de devolução"}
                                        />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="obs" rows="2" value={this.state.obs} onChange={this.handleChange} size="lg" hint="Observação" group type="textarea" validate success="right" className="form-control" />
                                    </MDBCol>
                                </Row>

                                <br></br>

                                <blockquote class="blockquote bq-info">
                                    <h2 class="bq-title"> Dados do Emprestante </h2>
                                </blockquote>

                                <Row>
                                    <MDBCol size="4">
                                        <Input name="nameuser" value={this.state.nameuser} onChange={this.handleChange} size="lg" label="Nome" group type="text" validate success="right" className="form-control" required />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="email" value={this.state.email} onChange={this.handleChange} size="lg" label="Email" group type="email" validate success="right" className="form-control" required />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="phone" value={this.state.phone} onChange={this.handleChange} size="lg" label="Telefone Ex: 9999-9999" group type="tel" validate success="right" className="form-control" required />
                                    </MDBCol>
                                </Row>

                                <Row>
                                    <MDBCol size="4">
                                        <Input name="street" value={this.state.street} onChange={this.handleChange} size="lg" label="Rua" group type="text" validate success="right" className="form-control" />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="number" value={this.state.number} onChange={this.handleChange} size="lg" label="Nº" group type="text" validate success="right" className="form-control" />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="neighborhood" value={this.state.neighborhood} onChange={this.handleChange} size="lg" label="Bairro" group type="text" validate success="right" className="form-control" />
                                    </MDBCol>
                                </Row>

                                <Row>
                                    <MDBCol size="4">
                                        <Input name="cep" value={this.state.cep} onChange={this.handleChange} size="lg" label="CEP" group type="text" validate success="right" className="form-control" />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="state" value={this.state.state} onChange={this.handleChange} size="lg" label="Estado" group type="text" validate success="right" className="form-control" required />
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <Input name="city" value={this.state.city} onChange={this.handleChange} size="lg" label="Cidade" group type="text" validate success="right" className="form-control" required />
                                    </MDBCol>
                                </Row>

                            </div>

                            <div className="text-center">
                                <Link to='/home/iemprestados' style={{ color: "blue" }}>
                                    <Button size="lg" outline color="info"> Cancelar </Button>
                                </Link>
                                <Button size="lg" gradient="aqua" type="Submit"> Cadastrar </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>

                <ToastContainer
                    style={{ fontSize: "medium" }}
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    closeButton={false}
                    newestOnTop={false}
                    rtl={false}
                    draggable={false}
                    pauseOnHover={false}
                >
                </ToastContainer>
            </Container>
        )
    }
}









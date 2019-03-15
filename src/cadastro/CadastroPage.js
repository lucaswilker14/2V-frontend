import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container, Card, CardBody, Input, Button, toast, ToastContainer } from 'mdbreact';
import { Link } from 'react-router-dom'

import image from '../images/2v.jpg'
import { API_ROUTE_HEROKU } from '../env'

import axios from 'axios'

export default class CadastroPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            secondName: '',
            username: '',
            phone: '',
            email: '',
            emailConfirm: '',
            password: '',
            passwordConfirm: '',
            image: '',
            isDisable: true
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setImage(image, repeat, size) {
        var body = ReactDOM.findDOMNode(this).parentElement.parentElement
        body.setAttribute('style', 'background-image: url(' + image + '); background-repeat: ' + repeat + ' ; background-size: ' + size + ' ;');
    }

    componentDidMount = () => {
        this.setImage(image, 'no-repeat', 'cover');
        localStorage.clear();
        const { firstName, secondName, email, imageGoogle, isToast } = this.props;
        if (imageGoogle !== undefined) {
            this.setState({ firstName: firstName, secondName: secondName, email: email, image: imageGoogle });
        }
        if (isToast) toast.warn('Preencha alguns dados antes de  continuar');
    }

    componentWillUnmount = () => {
        this.setImage(null, null, null);
    }

    handleChange(event) {
        //copiar sempre o estado da aplicacao para nao alterar o original
        // const state = Object.assign({}, this.state); //criando uma copia
        // const campo = event.target.name;
        // state[campo] = event.target.value;
        this.setState({ ...this.state, [event.target.name]: event.target.value }, function () { this.formValidation() });
    }

    formValidation = () => {

        const { firstName, secondName, phone, password, passwordConfirm } = this.state;

        if (firstName.length > 1
            && secondName.length > 1
            && phone.length > 8
            && password.length > 7 
            && passwordConfirm.length > 7) {
            this.setState({ isDisable: false })
        } else {
            this.setState({ isDisable: true })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.checkEmail() && this.checkPassword()) {
            this.registerUser();
            this.props.history.push('/');
        }
    }

    checkEmail = () => {
        if (this.state.email !== this.state.emailConfirm) {
            toast.warn('Emails diferentes. Cheque-os!')
        } else return true
    }

    checkPassword = () => {
        const { password, passwordConfirm } = this.state
        if ( password !== passwordConfirm ) {
            toast.warn('Senhas diferentes. Cheque-os!')
        } else return true
    }

    registerUser() {
        const request = {
            method: 'post',
            url: API_ROUTE_HEROKU + '/user',
            data: {
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                username: this.state.username,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password,
                image: this.state.image
            }
        }

        axios(request).then((response) => {
            toast.success(response.data.message);
            toast.success('Faça Login para continuar');
        }).catch((err) => {
            toast.error('Error: Impossível Cadastrar! Possivelmente o Usuario ja existe')
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
            width: "500px"
        }
        return (
            <Container style={estilo}>
                <Card style={estilo2}>
                    <CardBody>
                        <form onSubmit={this.handleSubmit}>
                            <p className="h2 text-center py-4"> Cadastro </p>

                            <div className="grey-text">
                                <div>
                                    <Input
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Nome"
                                        icon="user"
                                        type="text"
                                        group
                                        validate
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="secondName"
                                        maxLength='15'
                                        minlenght='2'
                                        value={this.state.secondName}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Sobrenome"
                                        icon="user"
                                        group
                                        validate
                                        type="text"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="username"
                                        maxLength='10'
                                        minlenght='5'
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Username"
                                        icon="user-plus"
                                        group
                                        validate
                                        type="text"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="phone"
                                        maxLength='9'
                                        minlenght='9'
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Telefone. Ex: 9999-9999"
                                        icon="phone"
                                        group
                                        validate
                                        type="tel"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        size="lg" label="Email"
                                        icon="envelope"
                                        group
                                        validate
                                        type="email"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="emailConfirm"
                                        value={this.state.emailConfirm}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Confirme seu email"
                                        icon="exclamation-triangle"
                                        group
                                        validate
                                        type="text"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="password"
                                        maxLength='20'
                                        minlenght='8'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Senha"
                                        icon="lock"
                                        group
                                        validate
                                        type="password"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="passwordConfirm"
                                        maxLength='20' minlenght='8'
                                        value={this.state.passwordConfirm}
                                        onChange={this.handleChange}
                                        size="lg"
                                        label="Confirme sua senha"
                                        icon="lock"
                                        group
                                        validate
                                        type="password"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="text-center py-4 mt-3">
                                <Link to='/'>
                                    <Button outline color="info" size="lg"> Voltar </Button>
                                </Link>
                                <Button disabled={this.state.isDisable} size="lg" gradient="aqua" type="Submit"> Cadastrar </Button>
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
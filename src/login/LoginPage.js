import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import './loginPage.css'
import image from '../images/2v.jpg'

import { Container, Card, CardBody, Input, Button, Fa, ToastContainer } from 'mdbreact';
import { Link } from 'react-router-dom'

// import Toast from '../alerts/Toast'

import axios from 'axios'
import jwt from 'jsonwebtoken'

import Google from './../socialLogin/GoogleLoginButton'
import Facebook from './../socialLogin/FaceLoginButton'

import { API_ROUTE } from '../env'


export default class LoginPage extends Component {

    _isMounted = false;

    constructor(props) {
        super(props)

        this.state = {
            isLogged: false,
            username: '',
            password: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //copiar sempre o estado da aplicacao para nao alterar o original
        const state = Object.assign({}, this.state); //criando uma copia
        const campo = event.target.name;
        state[campo] = event.target.value;
        if (this._isMounted) this.setState(state);
    }

    handleSubmit(event) {
        this.login(); //chamadax a API
        event.preventDefault();
    }

    setImage(image, repeat, size) {
        var body = ReactDOM.findDOMNode(this).parentElement.parentElement
        body.setAttribute('style', 'background-image: url(' + image + '); background-repeat: ' + repeat + ' ; background-size: ' + size + ' ;');
    }

    componentDidMount = () => {
        this.setImage(image, 'no-repeat', 'cover');
        localStorage.clear();
        this._isMounted = true;
    }

    componentWillUnmount = () => {
        this.setImage(null, null, null);
        this._isMounted = false;
    }

    login() {

        const request = {
            method: 'post',
            url: API_ROUTE + '/login',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }

        axios(request).then((response) => {
            //aqui eu faço a autenticação com a response
            //mudo de tela se tudo estiver ok
            if (response.data.status === 404) alert(response.data.message);
            else {
                var token = response.data.data.token;
                var tokenDecode = jwt.decode(token);
                var userId = tokenDecode.id;

                if (this._isMounted) this.setState({ isLogged: true, message: response.data.message });

                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                const isAdmin = jwt.decode(localStorage.getItem('token'))
                isAdmin.role !== undefined ? this.props.history.push('/admin/home') : this.props.history.push('/home');
            }
        });
    }

    loginGoogle = (responseG) => {
        this.props.history.push({ pathname: '/cadastrosocial', state: { response: responseG, isGoogle: true } });
    }

    //dont work
    loginFacebook = (responseF) => {
        this.props.history.push({ pathname: '/cadastrosocial', state: { response: responseF, isGoogle: false } });
    }

    render() {
        return (
            <Container className="login-container">
                <section>
                    <Card className="login-card">
                        <CardBody className="mx-1">
                            <div className="text-center">
                                <h1 className="dark-grey-text mb-5"><strong>Bem-vindo ao 2V</strong></h1>
                                <h3 className="dark-grey-text mb-5"><strong> Login </strong></h3>
                            </div>

                            <form onSubmit={this.handleSubmit}>
                                <Input name="username" value={this.state.username} onChange={this.handleChange} size="lg" validate className="row-md-6 form-control" label="Username" icon="user" type="text" required />
                                <Input name="password" value={this.state.password} onChange={this.handleChange} size="lg" validate className="row-md-6 form-control" label="Senha" icon="lock" type="password" required />

                                <p style={{ fontSize: "1.3rem", color: "#000000" }} className="d-flex justify-content-end pb-6">Não tem Cadastro ?
                                    <Link to='/cadastro' className="blue-text ml-1"> Cadastre-se!</Link>
                                </p>

                                <div className="text-center mb-3">
                                    <Button type="Submit"
                                        size="lg" gradient="aqua" style={{ fontSize: "1.3rem" }}
                                        rounded> Entrar
                                        </Button>
                                </div>

                                <p style={{ fontSize: "1.3rem" }} className="font-small dark-grey-text text-right d-flex justify-content-center"> or Sign in with:</p>

                                <div className="row my-3 d-flex justify-content-center">
                                    <Facebook />
                                    <Google loginGoogle={this.loginGoogle} />
                                    <Button disabled onClick={this.onClickTwitter} size="lg" type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                                        <Fa icon="twitter" className="blue-text" />
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </section>

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
        );

    }
}
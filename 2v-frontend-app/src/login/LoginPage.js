import React, { Component } from 'react'

import { Container, Card, CardBody, Input, Button, Fa, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'
import axios from 'axios'

import Google from './GoogleLoginButton'
import Facebook from './FaceLoginButton'

export default class LoginPage extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    handleChange(event) {
        //copiar sempre o estado da aplicacao para nao alterar o original
        const state = Object.assign({}, this.state); //criando uma copia
        const campo = event.target.name;
        state[campo] = event.target.value;
        this.setState(state);
    }
    
    handleSubmit(event) {
        this.login();
        event.preventDefault();
    }

    login() {

        const request = {
            method: 'post',
            url: 'http://localhost:3000/api/2V/login',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }

        axios(request).then((response) => {
            //aqui eu faço a autenticação com a response
            //mudo de tela se tudo estiver ok
            if (response.data.status === 404) toast.error(response.data.message);
            else toast.success(response.data.message);;
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
                <section>
                    <Card style={estilo2}>
                        <CardBody className="mx-1">
                            <div className="text-center">
                                <h1 className="dark-grey-text mb-5"><strong>Bem-vindo ao 2V</strong></h1>  
                                <h3 className="dark-grey-text mb-5"><strong> Login </strong></h3>
                            </div>
            
                            <Input name="username" value={this.state.username} onChange={this.handleChange} size="lg" className="row-md-6" label="Username" icon="user" type="text" />
                            <Input name="password" value={this.state.password} onChange={this.handleChange} size="lg" className="row-md-6" label="Senha" icon="lock"  type="password" />
            
            
                            <p style={{fontSize: "1.3rem", color: "#000000"}} className="d-flex justify-content-end pb-6">Não tem Cadastro ? 
                                <Link to='/cadastro' className="blue-text ml-1"> Cadastre-se!</Link>
                            </p>
            
                            <div className="text-center mb-3">
                                <Button onClick={this.handleSubmit} type="button" size="lg" gradient="aqua" style={{fontSize: "1.3rem"}}rounded> Entrar </Button>
                            </div>
            
                            <p style={{fontSize: "1.3rem"}} className="font-small dark-grey-text text-right d-flex justify-content-center"> or Sign in with:</p>
            
                            <div className="row my-3 d-flex justify-content-center">
                                <Facebook/>
                                <Google/>
                                <Button size="lg" type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                            </div>
                        </CardBody>
                    </Card>
                </section>
                <ToastContainer
                    style={{fontSize: "medium"}}
                    position="top-right"
                    autoClose={5000}
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
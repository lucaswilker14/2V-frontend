import React, { Component } from 'react'
import { Container, Card, CardBody, Input, Button, toast, ToastContainer } from 'mdbreact';
import  { Link } from 'react-router-dom'

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
            password: ''
        }
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        //copiar sempre o estado da aplicacao para nao alterar o original
        // const state = Object.assign({}, this.state); //criando uma copia
        // const campo = event.target.name;
        // state[campo] = event.target.value;
        this.setState({...this.state, [event.target.name]: event.target.value})
    }
    
    handleSubmit(event) {
        this.registerUser();
        event.preventDefault();
        this.props.history.push('/');
    }
    
    registerUser() {
        const request = {
            method: 'post',
            url: 'http://localhost:3000/api/2V/user',
            data: {
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                username: this.state.username,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password
            }
        }
        
        axios(request).then((response) => {
            toast.success(response.data.message);
        }).catch((err) => {
            console.log(err);
            toast.error('Impossível Cadastrar!')
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
                                <Input name="firstName" value={this.state.firstName} onChange={this.handleChange} size="lg" label="Nome" icon="user" group type="text" validate  success="right" className="form-control" required/>
                                <Input name="secondName" value={this.state.lastName} onChange={this.handleChange} size="lg" label="Sobrenome" icon="user" group type="text" validate  success="right" className="form-control" required/>                                
                                <Input name="username" value={this.state.username} onChange={this.handleChange} size="lg" label="Username" icon="user-plus" group type="text" validate  success="right" className="form-control" required/>
                                <Input name="phone" value={this.state.phone} onChange={this.handleChange} size="lg" label="Telefone" icon="phone" group type="tel" validate  success="right" className="form-control" required/>                                
                                <Input name="email" value={this.state.email} onChange={this.handleChange} size="lg" label="Email" icon="envelope" group type="email" validate  success="right" className="form-control" required/>
                                <Input name="email2" size="lg" label="Confirme seu email" icon="exclamation-triangle" group type="text" validate  success="right" className="form-control" required/>
                                <Input name="password" value={this.state.password} onChange={this.handleChange} size="lg" label="Senha" icon="lock" group type="password" validate className="form-control" required/>
                            </div>
            
                                <div className="text-center py-4 mt-3">
                                    <Button color="second" size="lg">
                                        <Link to='/'style={{color: "blue"}}> Voltar </Link>
                                    </Button>
                                    <Button size="lg" color="cyan" type="Submit"> Cadastrar </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            
            <ToastContainer
            style={{fontSize: "medium"}}
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
    
    
    // <Link to='/' style={{color: "white"}} >   </Link> 
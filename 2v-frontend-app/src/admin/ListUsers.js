import React, { Component } from 'react'
import { Table, TableBody, TableHead, Container } from 'mdbreact';
import axios from 'axios'

export default class ListUsers extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }

    componentDidMount = () => {
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'get',
            url: 'http://localhost:3000/api/2V/admin'
        }

        axios(request).then((response) => {
            console.log(response.data.data);
            this.setState({ users: response.data.data })
        });
    }
    
    createRows = () => {
        const {users} = this.state;
        return users.map((element, i) =>
            <tr>
                <td style={{fontSize: '1.5rem'}}>{i}</td>
                <td style={{fontSize: '1.5rem'}}>{element.firstName} {element.secondName}</td>
                <td style={{fontSize: '1.5rem'}}>{element.email}</td>
                <td style={{fontSize: '1.5rem'}}>{element.phone}</td>
            </tr>
        )
    }

    render() {
        return (
            <Container>
                <h1 className="text-center" style={{ marginTop: "10px" }}> Lista dos Usuários do Sistema </h1>
                <br></br>
                <Table hover>
                    <TableHead>
                        <tr>
                            <th style={{fontSize: '1.5rem'}}>#</th>
                            <th style={{fontSize: '1.5rem'}}>Nome</th>
                            <th style={{fontSize: '1.5rem'}}>Email</th>
                            <th style={{fontSize: '1.5rem'}}>Telefone</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {this.createRows()}
                    </TableBody>
                </Table>
            </Container>
        )
    }
}

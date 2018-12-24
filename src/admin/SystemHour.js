import React, { Component } from 'react'
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import axios from 'axios'
import { API_ROUTE } from '../env'


import { Container, Button, ToastContainer, toast } from 'mdbreact';


const format = 'HH:mm';

export default class SystemHour extends Component {

    constructor(props) {
        super(props)

        this.state = {
            systemHour: 0,
            systemMinute: 0,
            value: 0
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (value) => {
        const a = value.format(format);
        const time = a.split(':');
        this.setState({ systemHour: time[0] })
        this.setState({ systemMinute: time[1] });
    }

    setSystemHour = () => {
        const { systemHour, systemMinute } = this.state;
        const request = {
            headers: { 'x-access-token': localStorage.getItem('token') },
            method: 'put',
            url: API_ROUTE + '/admin/systemdate',
            data: {
                hour: systemHour,
                minute: systemMinute
            }
        }

        axios(request).then((response) => {
            response ? toast.success(response.data) : toast.warn(response.data);
            alert(response.data)
        }).catch((err) => {
            toast.warn('Problemas para alterar a hora')
        })
    }

    render() {
        return (
            <Container style={{ textAlign: 'center', marginTop: '20%' }}>
                <h1 className="text-center">
                    Alterar a hora do sistema para o envio automaticos de emails
                </h1>
                <TimePicker
                    showSecond={false}
                    defaultValue={moment()}
                    onChange={this.onChange}
                    format={format}
                    inputReadOnly
                />
                <Button color='red' style={{ fontSize: "0.83rem" }}
                    onClick={this.setSystemHour}>
                    Alterar
                </Button>
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





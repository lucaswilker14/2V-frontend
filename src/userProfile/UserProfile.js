import React, { Component } from 'react'
import axios from 'axios'
import { API_ROUTE } from '../env'

import { Row } from 'mdbreact';


import Bar from '../charts/BarChart'
import Line from '../charts/LineChart'
import Doughnut from '../charts/DoughnutChart'

export default class UserProfile extends Component {

   constructor(props) {
      super(props)

      this.state = {
         userLogged: [],
         imageUrl: '',
      }
   }

   componentDidMount = () => {
      this.listen();
   }

   renderUser(user) {
      return (
         <h1 className="text-center" style={{ marginTop: "10px" }}>
            <li>Nome: {user.firstName}</li>
            <li>Sobrenome: {user.secondName}</li>
            <li>E-mail: {user.email}</li>
         </h1>
      )
   }

   listen() {
      var userId = localStorage.getItem('userId');
      const request = {
         headers: { 'x-access-token': localStorage.getItem('token') },
         method: 'get',
         url: API_ROUTE + '/user/' + userId
      }

      axios(request).then((response) => {
         this.setState({ userLogged: response.data.data, imageUrl: response.data.data.image })
      });
   }

   render() {
      return (
         <div>
            <div>
               <Bar />
            </div>

            <Row>
               <Line/>
               <Doughnut/>
            </Row>

         </div>
      )
   }
}



        // <div className="d-flex justify-content-around" style={{ margin: "100px", textAlign: 'center' }}>
        // <ul>

        //     {this.state.imageUrl.includes('não definida') ?
        //         <Fa style={{ fontSize: "17rem" }} icon="user-circle-o" />
        //         :
        //         <img className="mx-auto d-block"
        //             src={this.state.imageUrl}
        //             style={{ height: '17rem', borderRadius: "100px" }}
        //             alt="autoretrato"
        //         />
        //     }

        //     {this.renderUser(this.state.userLogged)}
        // </ul>
        // </div>

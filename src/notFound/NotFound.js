import React, { Component } from 'react'
import image from '../images/X.png'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center"
          style={{ marginTop: "10%" }}
        >
          NÃO ENCONTRADA 
        </h1>
        <br></br>
        <img className="mx-auto d-block" style={{maxHeight: "120px"}} src={image} alt='nao-encontrado'></img>
      </div>
    )
  }
}

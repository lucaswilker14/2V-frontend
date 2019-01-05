import React, { Component } from 'react'

export default class AboutPage extends Component {
   render() {
      return (
         <div className="d-flex flex-column-reverse" style={{ margin: "100px" }}>
            <blockquote class="blockquote bq-info">
               <p class="bq-title" style={{ fontSize: "30px" }}> Projeto 2V </p>
               <br></br>
               <div class="d-flex flex-row">
                  <h3 class="mb-0">Desenvolvido por Lucas Wilker Moura Barbosa.</h3>
                  <a class="mb-0" rel="noopener noreferrer" href='https://github.com/lucaswilker14' target="_blank"> Github </a>
               </div>
               <h3 class="mb-0">Graduando da Universidade Federal de Campina Grande (Campus I)</h3>
               <br></br>
               <br></br>
               <footer class="blockquote-footer mb-3" style={{ textAlign: 'end' }}>Eu acredito que ás vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar.<cite title="Source Title">TURING, Alan</cite></footer>
            </blockquote>
         </div>
      )
   }
}

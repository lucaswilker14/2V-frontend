import React, { Component } from 'react'


import { MDBContainer, MDBRow } from 'mdbreact';
import Bar from '../charts/BarChart'
import Line from '../charts/LineChart'
import Doughnut from '../charts/DoughnutChart'

import '../charts/charts_layout.css'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className='container barchart'>
                    <Bar />
                </div>

                <MDBContainer>
                    <MDBRow>
                        <Line />
                        <Doughnut />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

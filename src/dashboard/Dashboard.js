import React, { Component } from 'react'


import { Row } from 'mdbreact';
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

                    <Line />
                    <Doughnut />

            </div>
        )
    }
}

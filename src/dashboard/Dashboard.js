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
                <div className='container barChart z-depth-2'>
                    <Bar />
                </div>

                <Row>
                    <div className='container lineChart z-depth-2'>
                        <Line />
                    </div>
                    <div className='container doughnutChart z-depth-2'>
                        <Doughnut />
                    </div>
                </Row>

            </div>
        )
    }
}

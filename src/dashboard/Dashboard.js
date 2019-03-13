import React, { Component } from 'react'


import { Row } from 'mdbreact';
import Bar from '../charts/BarChart'
import Line from '../charts/LineChart'
import Doughnut from '../charts/DoughnutChart'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <div>
                    <Bar />
                </div>

                <Row>
                    <Line />
                    <Doughnut />
                </Row>

            </div>
        )
    }
}

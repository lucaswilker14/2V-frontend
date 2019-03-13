import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';


export default class DoughnutChart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataDoughnut: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                datasets: [{
                    data: [12, 19, 3, 5, 10, 3],
                    backgroundColor: [
                        '#ef5350',
                        '#2196f3',
                        '#eeff41',
                        'rgba(75, 192, 192, 0.2)',
                        '#00e5ff',
                        '#ffff00'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        }
    }


    render() {
        return (
            <div style={{ width: '500px', marginLeft: '50px', marginTop: '50px', border: '2px solid gray' }}>
                <Doughnut
                    data={this.state.dataDoughnut}
                    width={50}
                    height={200}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

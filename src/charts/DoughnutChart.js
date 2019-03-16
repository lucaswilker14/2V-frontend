import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';


export default class DoughnutChart extends Component {

    constructor(props) {
        super(props)

        var datas = Array.from({ length: 4 }, () => Math.floor(Math.random() * 31));

        this.state = {
            dataDoughnut: {
                labels: ["Esperança", "Campina Grande", "João Pessoa", "Souza"],
                datasets: [{
                    data: datas,
                    labels: '# de acessos',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
        }
    }

    render() {
        return (
            <Doughnut
                data={this.state.dataDoughnut}
                height={200}
                options={{ maintainAspectRatio: false }}
            />
        )
    }
}

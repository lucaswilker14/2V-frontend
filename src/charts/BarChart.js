import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

import './charts_layout.css'


export default class BarChart extends Component {

    constructor(props) {
        super(props)

        var datas = Array.from({ length: 13 }, () => Math.floor(Math.random() * 31));

        this.state = {
            chartData: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [{
                    label: '# de Emprestimos (mockados)',
                    data: datas,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }],
                options: {

                }
            }
        }
    }


    render() {
        return (
            <Bar
                data={this.state.chartData}
                height={350}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],

                        xAxes: [{
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }}
            />
        )
    }
}

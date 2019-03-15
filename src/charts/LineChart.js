import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {

    constructor(props) {
        super(props)

        var datas = Array.from({ length: 13 }, () => Math.floor(Math.random() * 31));

        this.state = {
            dataLine: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{
                    label: '# de Emprestimos (mockados)',
                    data: datas,
                    backgroundColor: 'transparent',
                    borderColor: '#84ffff',
                    borderDashOffset: 6,
                    lineTension: 0,
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'gray'
                }]
            }
        }
    }


    render() {
        return (
            <Line
                data={this.state.dataLine}
                height={370}
                options={{ maintainAspectRatio: false }}
            />
        )
    }
}

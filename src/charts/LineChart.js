import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataLine: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{
                    label: '# de Emprestimos (mockados)',
                    data: [12, 19, 16, 5, 10, 13, 7, 6, 4, 8, 17, 10],
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
            <div style={{ width: '450px', marginLeft: '80px', marginTop: '50px', border: '2px solid gray' }}>
                <Line
                    data={this.state.dataLine}
                    width={50}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

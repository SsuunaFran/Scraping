import React,{Component} from "react";
import {Pie} from "react-chartjs-2";
import Chart from 'chart.js/auto';

class piechart extends Component{
    constructor(){
        super()
        this.state={
            data: {
                labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
                datasets: [{
                label: "online tutorial subjects",
                data: [20, 40, 13, 35, 20, 38],
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
                hoverOffset: 5
                }],
            },
            options: {
                responsive: true,
            },
        }
    }
    render(){
        return(
            <React.Fragment>
                <Pie data={this.state.data} options={this.state.options}></Pie>
            </React.Fragment>
        )
    }
}

export default piechart
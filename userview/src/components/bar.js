import React,{Component} from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


class Barchart extends Component{
    constructor(){
        super()
        this.state={
            data: {
                labels: ["SSUUNA", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
                datasets: [{
                   label: "online tutorial subjects",
                   data: [20, 40, 30, 35, 30, 20],
                   backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
                   borderColor: ['red', 'blue', 'fuchsia', 'green', 'navy', 'black'],
                   borderWidth: 2,
                }],
                options: {
                    responsive: true,
                 },
             }
        }
    }
    render(){
        return(
            <React.Fragment>
                <Bar data={this.state.data} options={this.state.options}></Bar>
            </React.Fragment>
        )
    }
}

export default Barchart;
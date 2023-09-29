import React,{Component} from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


class Barchart extends Component{
    constructor(){
        super()
        this.state={
            data: {
                labels: [],
                datasets: [{
                   label: "Jobs with Companies",
                   data: [],
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

    componentDidMount(){
        fetch('http://localhost:8080/bar').then((res)=>{
            if(!res.ok){
                console.log(`Error`)
                return
            }
            return res.json()
        }).then((data)=>{
            console.log(data);
            const CompanyNames=[];
            const ComCOunt=[];
            for(let i=0;i<data.length;i++){
                CompanyNames.push(data[i].Company);
                ComCOunt.push(data[i].CompanyCount);
            }
            this.setState({
                data:{
                    ...this.state.data,
                    labels:CompanyNames,
                    datasets:[{
                        ...this.state.data.datasets[0],
                        data:ComCOunt,
                    }]
                }
            })
        }).catch((err)=>{
            console.log(err)
        })
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
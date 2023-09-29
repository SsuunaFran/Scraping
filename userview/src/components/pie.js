import React,{Component} from "react";
import {Pie} from "react-chartjs-2";
import Chart from 'chart.js/auto';

class piechart extends Component{
    constructor(){
        super()
        this.state={
            data: {
                labels: [],
                datasets: [{
                label: "Jobs",
                data: [],
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
                hoverOffset: 5
                }],
            },
            options: {
                responsive: true,
            },
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/get_data').then((res)=>{
            if(!res.ok){
                console.log(`Error`)
                return
            }
            return res.json()
        }).then((data)=>{
            const CompanyNames=[];
            const LocCount=[];
            for(let i=0;i<data.length;i++){
                CompanyNames.push(data[i].Location);
                LocCount.push(data[i].LocationCount);
            }
            this.setState({
                data:{
                    ...this.state.data,
                    labels:CompanyNames,
                    datasets:[{
                        ...this.state.data.datasets[0],
                        data:LocCount,
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
                <Pie data={this.state.data} options={this.state.options}></Pie>
            </React.Fragment>
        )
    }
}

export default piechart

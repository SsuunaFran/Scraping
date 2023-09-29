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
                label: "Districts",
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
            for(let i=0;i<data.length;i++){
                const CompanyNames=[]
                CompanyNames.push(data[i].Company);
            }
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

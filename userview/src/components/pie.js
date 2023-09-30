import React,{Component} from "react";
import {Pie,getElementAtEvent} from "react-chartjs-2";
import Chart from 'chart.js/auto';

class piechart extends Component{
    constructor(){
        super()
        this.pieRef=React.createRef();
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
            const LocationNames=[];
            const LocCount=[];
            for(let i=0;i<data.length;i++){
                LocationNames.push(data[i].Location);
                LocCount.push(data[i].LocationCount);
            }
            this.setState({
                data:{
                    ...this.state.data,
                    labels:LocationNames,
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
       
    showModal=(e)=>{
        // console.log("Clicked");
        // console.log(this.pieRef.current);
        console.log(getElementAtEvent(this.pieRef.current, e));
        const element=(getElementAtEvent(this.pieRef.current, e))[0].index;
        const length=(getElementAtEvent(this.pieRef.current, e)).length;
        console.log(element);
        console.log(length);

    }

    render(){
        return(
            <React.Fragment>
                <Pie 
                data={this.state.data} 
                options={this.state.options} 
                onClick={this.showModal}
                ref={this.pieRef}
                ></Pie>
            </React.Fragment>
        )
    }
}

export default piechart

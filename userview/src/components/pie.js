import React,{Component} from "react";
import {Pie,getElementAtEvent} from "react-chartjs-2";
import Chart from 'chart.js/auto';

class piechart extends Component{
    constructor(props){
        super(props)
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
            ChildData:{}
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
            // console.log(data);
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
        // console.log(getElementAtEvent(this.pieRef.current, e));
        const length=(getElementAtEvent(this.pieRef.current, e)).length;
        if(length>0){
            const element=(getElementAtEvent(this.pieRef.current, e))[0].index;
            const location=(this.state.data.labels[element]);
            const sendData={
                location:location,
                id:element
            }
            console.log(this.state.data.labels[element]);
            fetch(`http://localhost:8080/piepopup`,{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body:new URLSearchParams(sendData).toString()
            }).then((response)=>{
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                  }
                  return response.json(); // Parse the response JSON
            }).then((data)=>{
                console.log(data);
                // console.log(this.state.data.datasets[0].label)
                // console.log(this.state.activate)
                this.setState({
                    // data:{
                    //     ...this.state.data,
                    //     datasets:[{
                    //         ...this.state.data.datasets[0],
                    //         label:"MEEEEEEEEEEEEE"
                    //     }]
                    // },
                    ChildData:data,
                },()=>{
                    // console.log("return func")
                    // console.log(this.state.data.datasets[0].la // console.log(this.state.activate)
                    // console.log(this.state.ChildData)bel)
                    this.props.get_childData(this.state.ChildData)
                    // console.log(this.state.activate)
                    // console.log(this.state.ChildData)
                })
            })
        }else{
            console.log(`You clicked outside the pie`);
        }
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

import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Piechart from './pie';
import './mystyles.css';
import Barchart from './bar';
import MyModal from './modal';

class Dashboard extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        try:"SSSSSSSSSS",
         DataFromPie:{}
      }
    }

    recieveData=(data)=>{
        this.setState({
            DataFromPie:data
        },()=>{
            // console.log(`Data from pie ${this.state.DataFromPie}`)
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid border border-1 border-primary'>
                    <MyModal dataFromParent={this.state.DataFromPie}/>
                    <div className='row container-fluid m-5'>
                        <div className='col-4'>
                            <div className='card'>
                                <div className='card-header'>
                                <span className='card-title text-primary fw-bold'>District Percentages</span>
                                </div>
                                <div className="card-body">
                                    <Piechart get_childData={this.recieveData}/>
                                </div>
                                <div className='card-footer'>
                                    <span className='text-primary'> Districts</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-7 m-1'>
                            <div className='card'>
                                <div className='card-header border border-1'>
                                    <span className='text-primary fw-bold'>Number of Jobs in line with Companies</span>
                                </div>
                                <div className='card-body'>
                                    <Barchart/>
                                </div>
                                <div className="card-footer">
                                    <span className='text-primary'>Jobs against companies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;
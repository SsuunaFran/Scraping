import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Piechart from './pie';
import './mystyles.css';
import Barchart from './bar';
class Dashboard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid border border-1 border-primary'>
                    <div className='row container-fluid m-5'>
                        <div className='col-4'>
                            <div className='card'>
                                <div className='card-header'>
                                <span className='card-title text-primary fw-bold'>Pie Chart</span>
                                </div>
                                <div className="card-body">
                                    <Piechart/>
                                </div>
                                <div className='card-footer'>
                                    <span className='text-primary'> Districts</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-7 m-1'>
                            <div className='card'>
                                <div className='card-header border border-1'>
                                    <span className='text-primary fw-bold'>Bar Graph</span>
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
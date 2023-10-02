import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Table extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       Location:""
    }
  }
  
  componentDidMount(){
    if(this.state.data !== this.props.showData){
      console.log(`ggggggggggggggggg`)
      this.setState({
        data:this.props.showData
      },()=>{
        const{data}=this.state;
        console.log(`table ${data[0].Location}`)
        this.setState({
          Location:data[0].Location
        })
      })
    }
  }

  render() {
    return (
      <div className='container container-fluid'>
        <div className='card w-l'>
            <div className='card-header text-primary fw-bold text-center'>JOBS IN {this.state.Location}</div>
            <div className='card-body'>
                <label>
                    Search :
                    <input type="search" className="form-control form-control-m mb-3" aria-controls="dataTable"> 
                    </input>
                </label>
                <table className="table table-striped">
                    <thead>
                        <tr className='border-top'>
                        <th scope="col">No</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Date Posted</th>
                        <th scope="col">Date Ago</th>
                        <th scope="col">Location</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">Closing Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.data).map((item,index)=>(
                          <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.JobTitle}</td>
                            <td>{item.Company}</td>
                            <td>{item.DatePosted}</td>
                            <td>{item.DateAgo}</td>
                            <td>{item.Location}</td>
                            <td>{item.JobType}</td>
                            <td>{item.Company}</td>
                          </tr>
                        ))}                                        
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default Table;

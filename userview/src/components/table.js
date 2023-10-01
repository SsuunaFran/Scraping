import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Table extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:{}
    }
  }
  
  componentDidUpdate(){
    if(this.state.data !== this.props.showData){
      console.log(`ggggggggggggggggg`)
      this.setState({
        data:this.props.showData
      },()=>{
        console.log(`table ${this.state.data}`)
      })
    }
  }

  render() {
    return (
      <div className='container container-fluid'>
        <div className='card w-l'>
            <div className='card-header text-primary fw-bold text-center'>JOBS IN ARUA</div>
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
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>SSUUNA</td>
                        <td>@twitter</td>
                        <td>Larry the Bird</td>
                        <td>SSUUNA</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default Table;

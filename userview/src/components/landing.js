import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className='container container-fluid d-flex justify-content-center align-items-center'>
          <div className='card mx-auto w-xl mt-5'>
            <div className='card-body p-5 text-center'>
              <h3 className='text-primary pb-3'>Scraped Data From Elite Jobs Today</h3>
              <h1 className='pb-3'>FIND YOUR NEXT CHAPTER</h1>
              <button className='btn btn-success'>SCRAPE NOW</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;

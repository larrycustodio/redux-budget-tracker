import React, { Component } from 'react';

export default class Summary extends Component {
  render() {
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Summary</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Income</h6>
                <p>$1500</p>
              </div>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Expense</h6>
                <p>$1000</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Left after spending</h6>
                <p>$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
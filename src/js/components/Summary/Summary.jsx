import React, { Component } from 'react';

// let calculateSum = ( arr ) => arr.reduce((curr,val) => curr + val);

export default class Summary extends Component {
  render() {
    // const { incomeItems, expenseItems } = this.props;
    
    // const incomeTotal = calculateSum(incomeItems.map(incItem => {
    //   Number(incItem.amount);
    // }));
    
    // const expenseTotal = calculateSum(expenseItems.map(expItem => {
    //   Number(expItem.amount);
    // }));
    
    return (
          <div className='container'>
              <div className='row'>
                <small className='strong'>Total Income</small>
                {/* <p>${ incomeTotal }</p> */}
              </div>
              <div className='row'>
                <small className='strong'>Total Expense</small>
                {/* <p>${ expenseTotal }</p> */}
              </div>
              <div className='row'>
                <small className='strong'>Left after spending</small>
                {/* <p>${ difference||0 }</p> */}
            </div>
          </div>
    );
  }
}
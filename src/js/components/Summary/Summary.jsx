import React, { Component } from 'react';

const calculateSum = arr => arr.reduce((curr,val) => curr + val);
const mapLineItemAmount = lineItems => lineItems.map(item => parseFloat(item.amount));

export default class Summary extends Component {
  render() {

    const expenseItems = this.props.expenseItems; 
    const incomeItems = this.props.incomeItems;
    let incomeTotal = 0;
    let expenseTotal = 0;

    if(!!expenseItems.length){
      const expenseAmounts = mapLineItemAmount(expenseItems);
      expenseTotal = calculateSum(expenseAmounts);
    }
    if(!!incomeItems.length){
      const incomeAmounts = mapLineItemAmount(incomeItems);
      incomeTotal = calculateSum(incomeAmounts);
    }

    return (
          <div className='container'>
              <div className='row'>
                <small className='strong'>Total Income</small>
                <p>${ incomeTotal.toFixed(2) }</p>
              </div>
              <div className='row'>
                <small className='strong'>Total Expense</small>
                <p>${ expenseTotal.toFixed(2) }</p>
              </div>
              <div className='row'>
                <small className='strong'>Left after spending</small>
                <p>${ (incomeTotal - expenseTotal).toFixed(2) }</p>
            </div>
          </div>
    );
  }
}
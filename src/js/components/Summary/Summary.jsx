import React, { Component } from 'react';

const calculateSum = arr => {
  return arr.reduce((curr,val) => curr + val)
};

const mapLineItemAmount = lineItems => {
  return lineItems.map(item => {
    return parseFloat(item.amount)
  })
};

const getToday = () => {
  const monthAbbrv = ['Jan','Feb','Mar','Apr','May',
  'Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  const today = new Date();
  let dd = today.getDate();
  dd = dd < 10 ? '0' + dd : dd;
  const mm = today.getMonth();
  const yyyy = today.getFullYear();

  return `${monthAbbrv[mm]} ${dd}, ${yyyy}`; 
} 

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
          <section className='section'>
            <div className='container'>
            <h1 className='title'>Budget Overview</h1>
            <h2 className='subtitle'>Last Update: { getToday() }</h2>
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
          </section>
    );
  }
}
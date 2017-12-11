import React, { Component } from 'react';
import SummaryChart from './SummaryChart';

const calculateSum = arr => {
  return arr.reduce((curr, val) => curr + val)
};

const mapLineItemAmount = lineItems => {
  return lineItems.map(item => {
    return parseFloat(item.amount)
  })
};

const getToday = () => {
  const monthAbbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
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

    if (!!expenseItems.length) {
      const expenseAmounts = mapLineItemAmount(expenseItems);
      expenseTotal = calculateSum(expenseAmounts);
    }
    if (!!incomeItems.length) {
      const incomeAmounts = mapLineItemAmount(incomeItems);
      incomeTotal = calculateSum(incomeAmounts);
    }

    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Budget Overview</h1>
          <h2 className='subtitle'>Last Update: {getToday()}</h2>
          <div className='columns'>
            <div className='column'>
              <div className='py-1'>
              <p className={
                'is-size-1 ' + (incomeTotal - expenseTotal < 0 ? 'has-text-danger' : 
                incomeTotal - expenseTotal === 0 ? 'has-text-grey' : 'has-text-success')
                }>
                ${(incomeTotal - expenseTotal).toFixed(2)}
              </p>
              <p className='is-size-4'>Money Left</p>
              </div>
              <div className='columns is-1 py-1'>
                <div className='column'>
                  <p className='is-size-3 has-text-success'>${incomeTotal.toFixed(2)}</p>
                  <p className='is-size-6'>Total Income</p>
                </div>
                <div className='column'>
                  <p className='is-size-3 has-text-danger'>${expenseTotal.toFixed(2)}</p>
                  <p className='is-size-6'>Total Expense</p>
                </div>
              </div>
            </div>{/* End summary table */}
            <div className='column is-9'>
              <SummaryChart incomeTotal={incomeTotal.toFixed(2)} expenseTotal={expenseTotal.toFixed(2)} />
            </div>{/* End summary chart */}
          </div>
        </div>
      </section>
    );
  }
}
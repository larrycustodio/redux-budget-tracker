import React, { Component } from 'react';
import IncomeChart from './IncomeChart';

//Importing action creators
import {
  addIncome
} from './incomeActions';

export default class IncomeEntries extends Component {
  constructor(props) {
    super(props);
    /* 
    * Binding the methods to the component this
    */
  }

  render() {
    const { description, amount, lineItems } = this.props;
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Income Overview</h1>
          <div className='columns'>
            <div className='column'>
              <table className='table is-striped is-fullwidth'>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    lineItems.map((lineItem, index) => (
                      <tr key={'index-' + index} data-income-index={index}>
                        <td>{lineItem.description}</td>
                        <td>${lineItem.amount}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='column'>
              <IncomeChart />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

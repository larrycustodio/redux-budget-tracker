import React, { Component } from 'react';

//Importing action creators
import {
  addExpense
} from './expenseActions';

export default class ExpenseEntries extends Component {
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
        <h1 className='title'>Expense Overview</h1>
          <table className='table is-striped'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                lineItems.map((lineItem, index) => (
                  <tr key={'index-' + index} data-expense-index={index}>
                    <td>{lineItem.description}</td>
                    <td>${lineItem.amount}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

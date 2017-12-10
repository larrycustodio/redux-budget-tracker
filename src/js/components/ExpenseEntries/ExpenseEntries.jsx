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
      <div>
            <table className='table table-sm table-hover'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={{ width: 120 }} >Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  lineItems.map((lineItem,index) => (
                    <tr key={'index-'+index}>
                      <td>{ lineItem.description }</td>
                      <td>${ lineItem.amount }</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
    );
  }
}

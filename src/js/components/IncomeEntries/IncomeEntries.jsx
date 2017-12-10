import React, { Component } from 'react';

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
              lineItems.map((lineItem, index) => (
                <tr key={'item-' + index}>
                  <td>{lineItem.description}</td>
                  <td>${lineItem.amount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

import React from 'react';
import style from '../css/style.scss';

import ExpenseEntries from './components/ExpenseEntries';
import IncomeEntries from './components/IncomeEntries';
import Summary from './components/Summary';
import BudgetForm from './components/BudgetForm';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
          <h1 className='display-3 text-center'>Budget Tracker</h1>
            <Summary />
            <IncomeEntries />
            <ExpenseEntries />
            <BudgetForm />
      </div>
    );
  }
}

import React from 'react';
import style from '../css/style.scss';

import NavBar from './components/NavBar';
import ExpenseEntries from './components/ExpenseEntries';
import IncomeEntries from './components/IncomeEntries';
import Summary from './components/Summary';
import BudgetForm from './components/BudgetForm';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
            <NavBar />
            <Summary />
            <IncomeEntries />
            <ExpenseEntries />
            <BudgetForm />
            <Footer />
      </div>
    );
  }
}

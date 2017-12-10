import React, { Component } from 'react';
import { updateBudgetInformation } from './budgetFormActions';
import { addExpense } from '../ExpenseEntries/expenseActions';
import { addIncome } from '../IncomeEntries/incomeActions';

export default class BudgetForm extends Component {
    constructor(props) {
        super(props);

        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormInput(e){
        this.props.dispatch(updateBudgetInformation(e.target.name,e.target.value));
    }

    handleSubmit(e){
        e.preventDefault();
        const { source, description, amount } =  this.props.budgetForm.onEdit;
        if(!!source && !!description && !!amount){
            if(source == 'income'){
                this.props.dispatch(addIncome(description, amount));
            }
            if(source == 'expense'){
                this.props.dispatch(addExpense(description, amount));
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Add New Budget</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='budget-source'>Expense or Income?</label>
                        <select name='source'
                            onChange={this.handleFormInput}>
                            <option value="income">Income</option>
                            <option value="expense">Expenses</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='budget-description'>Description</label>
                        <input type='text'
                            name='description'
                            id='budgetDescription'
                            className='form-control'
                        // value={description}
                        onChange = { this.handleFormInput }
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='budget-amount'>Amount</label>
                        <div className='input-group'>
                            <span className='input-group-addon'>$</span>
                            <input type='text'
                                name='amount'
                                id='budgetAmount'
                                className='form-control'
                            // value={amount}
                            onChange = { this.handleFormInput }
                            />
                        </div>
                    </div>
                    <button type='submit' 
                    onSubmit={this.handleSubmit}
                    className='btn'>Add Expense</button>
                </form>
            </div>
        );
    }
}
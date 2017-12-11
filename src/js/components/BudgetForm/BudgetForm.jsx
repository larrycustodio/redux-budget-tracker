import React, { Component } from 'react';
import {
    updateBudgetInformation,
    openBudgetForm,
    closeBudgetForm
} from './budgetFormActions';
import { addExpense } from '../ExpenseEntries/expenseActions';
import { addIncome } from '../IncomeEntries/incomeActions';

export default class BudgetForm extends Component {
    constructor(props) {
        super(props);

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);        
        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleModalOpen() {
        this.props.dispatch(openBudgetForm());
    }
    handleModalClose() {
        this.props.dispatch(closeBudgetForm());
    }
    handleFormInput(e) {
        this.props.dispatch(updateBudgetInformation(e.target.name, e.target.value));
    }
    handleSubmit(e) {
        e.preventDefault();
        const { source, description, amount } = this.props.budgetForm.onEdit;
        console.log(this.props.budgetForm.onEdit);
        if (!!source && !!description && !!amount) {
            if (source == 'income') {
                console.log('dispatching income...');
                this.props.dispatch(addIncome(description, amount));
                this.props.dispatch(closeBudgetForm());                
            }
            if (source == 'expense') {
                console.log('dispatching expense...');                
                this.props.dispatch(addExpense(description, amount));
                this.props.dispatch(closeBudgetForm());                
            }
        }
    }
    render() {
        return (
            <aside className='aside-modify-budget'>
                <button className='button is-info button-modal-toggler' onClick={this.handleModalOpen}>
                    <span className="icon is-large">
                        <i className="fa fa-plus"></i>
                    </span>
                </button>
                <div className={ this.props.budgetForm.isFormVisible ? 'modal is-active' : 'modal' }>
                    <div className='modal-background'></div>
                    <div className='modal-card'>
                        <div className='modal-card-head'>
                            <p className='modal-card-title'>Add New Budget</p>
                            <button className='delete' aria-label='close'
                            onClick={this.handleModalClose}></button>
                        </div>
                        <form className='modal-card-body' onSubmit={this.handleSubmit}>
                            <div className='field'>
                                <label className='label'>Budget Category</label>
                                <div className='control'>
                                    <div className='select'>
                                        <select name='source'
                                            onChange={this.handleFormInput}>
                                            <option value="income">Income</option>
                                            <option value="expense">Expenses</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field is-grouped'>
                                <div className='control has-icons-left'>
                                    <input type='text'
                                        name='description'
                                        id='budgetDescription'
                                        className='input'
                                        onChange={this.handleFormInput}
                                        placeholder='Description'
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-sticky-note-o"></i>
                                    </span>
                                </div>
                                <div className='control has-icons-left'>
                                    <input type='text'
                                        name='amount'
                                        id='budgetAmount'
                                        className='input'
                                        onChange={this.handleFormInput}
                                        placeholder='Enter amount'
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-usd"></i>
                                    </span>
                                </div>
                            </div>
                            <div className='field is-centered'>
                                <div className='control'>
                                    <button type='submit'
                                        onSubmit={this.handleSubmit}
                                        className={`button is-primary 
                                        ${this.props.budgetForm.onEdit.source}`}>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </aside>
        );
    }
}
import React, { Component } from 'react';

export default class BudgetForm extends Component {
    constructor(props) {
        super(props);

        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormInput(e){
        console.log(`changing inputs for ${e.target.name}`);
        
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('submitting...');
    }

    render() {
        return (
            <div>
                <h2>Add New Budget</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='budget-description'>Expense or Income?</label>
                        <select name=''
                            onChange={this.handleFormInput}>
                            <option value="0">Expense</option>
                            <option value="1">Income</option>
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
                    <button type='button' 
                    onClick={this.handleSubmit}
                    className='btn'>Add Expense</button>
                </form>
            </div>
        );
    }
}
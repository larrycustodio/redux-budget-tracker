import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEntries/expenseReducer';
import incomeReducer from './components/IncomeEntries/incomeReducer';
import budgetFormReducer from './components/BudgetForm/budgetFormReducer';

//combine expense + income reducers
const rootReducer = combineReducers({
    expense: expenseReducer,
    income: incomeReducer,
    budgetForm: budgetFormReducer
});

export default rootReducer;
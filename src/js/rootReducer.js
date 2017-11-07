import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEntries/expenseReducer';
import incomeReducer from './components/IncomeEntries/incomeReducer';

//combine expense + income reducers
const rootReducer = combineReducers({
    expense: expenseReducer,
    income: incomeReducer
});

export default rootReducer;
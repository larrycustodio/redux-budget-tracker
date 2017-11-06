import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';

//Takes the store and passes it as a component props
function mapStoreToProps(store) {
    return {
        description:store.expense.description,
        amount: store.expense.amount,
        lineItems: store.expense.lineItems
    };
}

//Returns a function called within the component itself.
export default connect(mapStoreToProps)(ExpenseEntries);
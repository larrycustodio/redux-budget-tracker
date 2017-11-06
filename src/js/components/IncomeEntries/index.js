import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

//Takes the store and passes it as a component props
function mapStoreToProps(store) {
    return {
        description: store.income.description,
        amount: store.income.amount,
        lineItems: store.income.lineItems
    };
}

//Returns a function called within the component itself.
export default connect(mapStoreToProps)(IncomeEntries);
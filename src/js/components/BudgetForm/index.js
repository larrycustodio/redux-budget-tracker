import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';

const mapStoreToProps = (store) => {
    return {
        budgetForm: store.budgetForm
    };
}

export default connect(mapStoreToProps)(BudgetForm);
import { types } from './budgetFormActions';

const defaultState = {
    onEdit: {
        source: 'Enter source',
        description: 'Enter description',
        amount: '',
        comments: 'Add note'
    },
    isFormVisible: false
};

export default function budgetFormReducer(state = defaultState, action){
    const { type, payload } = action;

    switch(type){
        case types.OPEN_BUDGET_FORM: {
            return {
                ...state,
                ...payload
            }
        }
        case types.CLOSE_BUDGET_FORM: {
            return {
                ...state,
                ...payload
            }
        }
        case types.UPDATE_BUDGET_INFO: {
            return {
                ...state,
                onEdit: {
                    ...state.onEdit,
                    ...payload
                }
            }
        }
        default: {
            return state;
        }
    }
}
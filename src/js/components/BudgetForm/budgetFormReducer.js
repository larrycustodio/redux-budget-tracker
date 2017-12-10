import { types } from './budgetFormActions';

const defaultState = {
    onEdit: {
        source: 'Enter source',
        description: 'Enter description',
        amount: '',
        comments: 'Add note'
    }
};

export default function budgetFormReducer(state = defaultState, action){
    const { type, payload } = action;

    switch(type){
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
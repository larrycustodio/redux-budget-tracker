import { types } from './budgetFormActions';

const defaultState = {
    onEdit: {
        source: '',
        description: '',
        amount: '',
        comments: ''
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
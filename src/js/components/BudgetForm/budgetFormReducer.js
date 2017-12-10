import { types } from './budgetFormActions';

const defaultState = {

};

export const budgetFormReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type){
        case types.BUDGET_FORM_ACTION_NAME: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
    return state;
}
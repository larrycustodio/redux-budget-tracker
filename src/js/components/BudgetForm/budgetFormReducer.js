import { types } from './budgetFormActions';

const defaultState = {
    hello: 'blank'
};

export default function budgetFormReducer(state = defaultState, action){
    const { type, payload } = action;

    switch(type){
        case types.BUDGET_FORM_ACTION_NAME: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
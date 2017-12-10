import { types } from './expenseActions';

const defaultState = {
    lineItems: []
};

export default function ExpenseReducer(state = defaultState, action) {
    //state = defaultState acts as a default
    const { type, payload } = action;

    switch(type){
        case types.ADD_EXPENSE: {
            return {
                ...state,
                lineItems: [
                    ...state.lineItems,
                    { ...payload }
                ]
            }
        }

        default: {
            return state;
        }
    }
}